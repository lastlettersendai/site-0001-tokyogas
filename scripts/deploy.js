import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

async function runCommand(command, name) {
    console.log(`\n🚀 実行中: ${name} (${command})`);
    try {
        const { stdout, stderr } = await execAsync(command);
        console.log(`✅ 成功: ${name}`);
        if (stdout) console.log(stdout.trim());
        if (stderr) console.error(stderr.trim());
        return true;
    } catch (error) {
        console.error(`❌ エラー: ${name}`);
        console.error(error.message);
        return false;
    }
}

async function deployWithRetry(maxRetries = 3) {
    console.log('\n=============================================');
    console.log('✨ 全自動デプロイを開始します ✨');
    console.log('=============================================');

    // 1. git add
    await runCommand('git add .', 'Git Add');

    // 2. git commit (エラーになってもスキップ: 変更がない場合など)
    console.log(`\n🚀 実行中: Git Commit`);
    try {
        const { stdout } = await execAsync('git commit -m "auto update"');
        console.log(`✅ 成功: Git Commit`);
        console.log(stdout.trim());
    } catch (e) {
        console.log(`ℹ️ スキップ: 新しい変更はありません`);
    }

    // 3. git push
    const pushSuccess = await runCommand('git push', 'Git Push');
    if (!pushSuccess) {
        console.log('⚠️ GitHubへのPushに失敗しましたが、Vercelデプロイは続行します。');
    }

    // 4. pnpm build && npx vercel --prod --yes (自動リトライ処理付き)
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
        console.log(`\n🔄 Vercelデプロイ (試行 ${attempt}/${maxRetries})`);

        const success = await runCommand('pnpm build && npx vercel --prod --yes', 'Vercel Deploy');

        if (success) {
            console.log('\n🎉 デプロイが完全に成功しました！');
            console.log('=============================================');
            return;
        }

        if (attempt < maxRetries) {
            console.log(`⏳ 5秒後にリトライします...`);
            await new Promise(resolve => setTimeout(resolve, 5000));
        }
    }

    console.error('\n🚨 全ての試行が失敗しました。手動で確認してください。');
    process.exit(1);
}

deployWithRetry();
