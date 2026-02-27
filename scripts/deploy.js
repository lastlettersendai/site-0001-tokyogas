/*
 * GodMaster Auto-Deploy Macro (Modified for Manual Vercel Push)
 * Git Add, Commit, Pushを自動化し、Vercelデプロイ用コマンドを生成します。
 */
import { execSync } from 'node:child_process';
import process from 'node:process';

const run = (command, errorMessage) => {
    try {
        console.log(`\n🚀 実行中: ${command.name} (${command.cmd})`);
        execSync(command.cmd, { stdio: 'inherit' });
        console.log(`✅ 成功: ${command.name}`);
        return true;
    } catch (error) {
        console.error(`❌ エラー: ${command.name}`);
        console.error(error.message);
        if (errorMessage) console.error(errorMessage);
        return false;
    }
};

const executeDeploy = async () => {
    console.log('\n=============================================');
    console.log('✨ 全自動コミットプロセスを開始します ✨');
    console.log('=============================================\n');

    // 1. Git Add
    run(
        { name: 'Git Add', cmd: 'git add .' },
        'Git addに失敗しました。Gitリポジトリが初期化されているか確認してください。'
    );

    // 2. Git Commit
    const dateStr = new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '');
    run(
        { name: 'Git Commit', cmd: `git commit -m "auto update"` },
        '変更がないか、コミットに失敗しました。'
    );

    // 3. Git Push
    run(
        { name: 'Git Push', cmd: 'git push' },
        'GitHubへのPushに失敗しました。Git認証設定を確認してください。'
    );

    console.log('\n=============================================');
    console.log('🛑 司令官殿、ここからは「手動デプロイ」の時間です！');
    console.log('以下のコマンドをコピーして、ターミナルに貼り付けて実行してください。');
    console.log('=============================================\n');
    console.log('cd /Users/mac/product/GodMaster-Orchestrator/sites/site-0001-tokyogas');
    console.log('npx vercel --prod --yes\n');
    console.log('=============================================\n');

    process.exit(0);
};

executeDeploy();
