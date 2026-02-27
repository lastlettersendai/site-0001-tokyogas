import React from 'react';
import {
    XCircle, AlertTriangle, CheckCircle2, Lightbulb,
    Coins, CheckSquare, Info, Target, Sparkles,
    Building2, Home, PartyPopper, ClipboardList,
    HandHeart, Plug, Zap, Sun, Moon,
    HardHat, Wrench, Package, Hammer, ShieldCheck, FileText,
    Battery, Clock, Ban, PenTool, MessageCircle, Handshake,
    Droplet, Wind, PhoneOff, Shield, Star,
    ArrowRight, ArrowLeft, ArrowDown, Circle, Banknote, Landmark, Construction, User, Truck, ShieldAlert, ChevronDown
} from 'lucide-react';

const ICON_MAP = {
    x: XCircle,
    alert: AlertTriangle,
    check: CheckCircle2,
    idea: Lightbulb,
    money: Coins,
    square: CheckSquare,
    info: Info,
    target: Target,
    sparkles: Sparkles,
    building: Building2,
    home: Home,
    party: PartyPopper,
    clipboard: ClipboardList,
    pray: HandHeart,
    plug: Plug,
    zap: Zap,
    sun: Sun,
    moon: Moon,
    hardhat: HardHat,
    wrench: Wrench,
    box: Package,
    hammer: Hammer,
    shield: ShieldCheck,
    file: FileText,
    battery: Battery,
    clock: Clock,
    ban: Ban,
    pen: PenTool,
    message: MessageCircle,
    handshake: Handshake,
    droplet: Droplet,
    wind: Wind,
    phoneOff: PhoneOff,
    safeshield: Shield,
    star: Star,
    arrowRight: ArrowRight,
    arrowLeft: ArrowLeft,
    arrowDown: ArrowDown,
    circle: Circle,
    banknote: Banknote,
    landmark: Landmark,
    construction: Construction,
    user: User,
    truck: Truck,
    shieldAlert: ShieldAlert,
    chevronDown: ChevronDown
};

export const Icon = ({ name, className = "" }) => {
    const IconComponent = ICON_MAP[name];
    if (!IconComponent) return null;

    // 共通のベーススタイル（色やマージンはpropsで上書き可能）
    const defaultStyles = "size-5 text-slate-600 inline-block align-middle";

    return <IconComponent className={`${defaultStyles} ${className}`} />;
};
