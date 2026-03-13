import React from "react";
import { motion } from "framer-motion";
import { UserX, FileQuestion, EyeOff, PenTool, Trophy } from "lucide-react";

export const BouncyCardsFeatures = () => {
    return (
        <div className="w-full text-slate-800 pb-16">
            <div className="mb-12 flex flex-col justify-center items-center text-center px-4 mt-12 md:mt-0">
                <span className="text-xl md:text-3xl font-semibold text-neutral-300 mb-2">
                    Teaching Abacus Online Isn't the Problem —
                </span>
                <h2 className="w-full text-3xl md:text-5xl font-bold text-gold-500 leading-tight max-w-5xl">
                    Student Practice is.
                </h2>
            </div>

            <div className="mb-4 grid grid-cols-5 gap-4 hidden md:grid">
                <BounceCard className="col-span-1 border border-white/5 bg-transparent p-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-400">
                        <UserX className="w-8 h-8" />
                    </div>
                    <p className="text-center text-sm font-semibold text-neutral-300 max-w-[120px]">
                        Students don't practice regularly at home
                    </p>
                </BounceCard>
                <BounceCard className="col-span-1 border border-white/5 bg-transparent p-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-amber-500/10 flex items-center justify-center mb-4 text-amber-400">
                        <FileQuestion className="w-8 h-8" />
                    </div>
                    <p className="text-center text-sm font-semibold text-neutral-300 max-w-[120px]">
                        Worksheets get boring quickly
                    </p>
                </BounceCard>
                <BounceCard className="col-span-1 border border-white/5 bg-transparent p-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mb-4 text-emerald-400">
                        <EyeOff className="w-8 h-8" />
                    </div>
                    <p className="text-center text-sm font-semibold text-neutral-300 max-w-[120px]">
                        Parents aren't tracking real progress
                    </p>
                </BounceCard>
                <BounceCard className="col-span-1 border border-white/5 bg-transparent p-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400">
                        <PenTool className="w-8 h-8" />
                    </div>
                    <p className="text-center text-sm font-semibold text-neutral-300 max-w-[120px]">
                        Teachers spend time correcting instead of teaching
                    </p>
                </BounceCard>
                <BounceCard className="col-span-1 border border-white/5 bg-transparent p-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-gold-500/10 flex items-center justify-center mb-4 text-gold-400">
                        <Trophy className="w-8 h-8" />
                    </div>
                    <p className="text-center text-sm font-semibold text-neutral-300 max-w-[120px]">
                        No exposure to competitions or benchmarks
                    </p>
                </BounceCard>
            </div>

            {/* Bridge / Baseline illustration */}
            <div className="hidden md:flex flex-col items-center mt-8 px-4 w-full">
                <div className="w-full max-w-5xl h-px bg-white/20 relative">
                    {/* Bridge Supports */}
                    <div className="absolute -top-4 left-[10%] w-px h-8 bg-white/20"></div>
                    <div className="absolute -top-4 left-[30%] w-px h-8 bg-white/20"></div>
                    <div className="absolute -top-4 left-[50%] w-px h-8 bg-white/20"></div>
                    <div className="absolute -top-4 left-[70%] w-px h-8 bg-white/20"></div>
                    <div className="absolute -top-4 left-[90%] w-px h-8 bg-white/20"></div>
                </div>
                <div className="mt-4 px-6 py-2 bg-neutral-900 border border-gold-500/30 rounded-full shadow-lg shadow-gold-500/5">
                    <p className="text-gold-400 font-semibold text-sm">Even good teaching fails without structured practice.</p>
                </div>
            </div>


            {/* Mobile Fallback layout */}
            <div className="md:hidden space-y-4 px-4">
                <div className="flex items-center gap-4 bg-neutral-900 p-4 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                        <UserX className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-300">
                        Students don't practice regularly at home
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-neutral-900 p-4 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                        <FileQuestion className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-300">
                        Worksheets get boring quickly
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-neutral-900 p-4 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                        <EyeOff className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-300">
                        Parents aren't tracking real progress
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-neutral-900 p-4 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                        <PenTool className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-300">
                        Teachers spend time correcting instead of teaching
                    </p>
                </div>
                <div className="flex items-center gap-4 bg-neutral-900 p-4 rounded-xl border border-white/5">
                    <div className="w-12 h-12 rounded-full bg-gold-500/10 flex items-center justify-center text-gold-400 shrink-0">
                        <Trophy className="w-6 h-6" />
                    </div>
                    <p className="text-sm font-semibold text-neutral-300">
                        No exposure to competitions or benchmarks
                    </p>
                </div>

                <div className="mt-8 text-center px-4 py-3 bg-neutral-900/50 border border-gold-500/30 rounded-xl">
                    <p className="text-gold-400 font-semibold text-sm">Even good teaching fails without structured practice.</p>
                </div>
            </div>

        </div>
    );
};

// Simplified BounceCard for the new layout
const BounceCard = ({ className, children }: { className?: string; children: React.ReactNode }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            className={`relative cursor-pointer transition-all duration-300 ${className}`}
        >
            {children}
        </motion.div>
    );
};
