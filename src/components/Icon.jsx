import React from 'react';
import {
    XCircle,
    Warning,
    CheckCircle,
    Lightbulb,
    Coins,
    CheckSquare,
    Info,
    Target,
    Sparkle,
    Buildings,
    House,
    Confetti,
    ClipboardText,
    HandHeart,
    Plug,
    Lightning,
    Sun,
    Moon,
    HardHat,
    Wrench,
    Package,
    Hammer,
    ShieldCheck,
    FileText,
    BatteryHigh,
    Clock,
    Prohibit,
    PencilSimple,
    ChatCircleDots,
    Handshake,
    Drop,
    Wind,
    PhoneSlash,
    Shield,
    Star,
    ArrowRight,
    ArrowLeft,
    ArrowDown,
    Circle,
    Bank,
    User,
    Truck,
    ShieldWarning,
    CaretDown
} from '@phosphor-icons/react';

const ICON_MAP = {
    x: XCircle,
    alert: Warning,
    check: CheckCircle,
    idea: Lightbulb,
    money: Coins,
    square: CheckSquare,
    info: Info,
    target: Target,
    sparkles: Sparkle,
    building: Buildings,
    home: House,
    party: Confetti,
    clipboard: ClipboardText,
    pray: HandHeart,
    plug: Plug,
    zap: Lightning,
    sun: Sun,
    moon: Moon,
    hardhat: HardHat,
    wrench: Wrench,
    box: Package,
    hammer: Hammer,
    shield: ShieldCheck,
    file: FileText,
    battery: BatteryHigh,
    clock: Clock,
    ban: Prohibit,
    pen: PencilSimple,
    message: ChatCircleDots,
    handshake: Handshake,
    droplet: Drop,
    wind: Wind,
    phoneOff: PhoneSlash,
    safeshield: Shield,
    star: Star,
    arrowRight: ArrowRight,
    arrowLeft: ArrowLeft,
    arrowDown: ArrowDown,
    circle: Circle,
    banknote: Bank,
    landmark: Bank,
    construction: HardHat,
    user: User,
    truck: Truck,
    shieldAlert: ShieldWarning,
    chevronDown: CaretDown
};

export const Icon = ({ name, className = "" }) => {
    const IconComponent = ICON_MAP[name];
    if (!IconComponent) return null;

    // 共通のベーススタイル
    const defaultStyles = "inline-block align-middle text-slate-500/80";

    return (
        <IconComponent
            className={`${defaultStyles} ${className}`}
            weight="duotone"
        />
    );
};
