import React from 'react';

interface WowWindowProps {
  title: string;
  medallionIcon?: React.ReactNode;
  onClose?: () => void;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
  tabs?: React.ReactNode;
}

export const WowWindow: React.FC<WowWindowProps> = ({
  title,
  medallionIcon,
  onClose,
  children,
  className = '',
  headerActions,
  tabs,
}) => {
  return (
    <div className={`wow-window relative flex flex-col ${className}`}>
      {/* Title Bar directly styled like Image 1 & 2 */}
      <div className="relative h-11 border-b border-[#3d2f20] bg-gradient-to-b from-[#1c1610] to-[#100d08] flex items-center justify-between px-3 select-none flex-shrink-0">
        {/* Top-left Medallion Ring */}
        <div className="flex items-center gap-2">
          {medallionIcon && (
            <div className="w-8 h-8 rounded-full border-2 border-[#b88c3a] bg-[#0c0906] flex items-center justify-center text-sm shadow-[0_0_8px_rgba(184,140,58,0.4)] flex-shrink-0">
              {medallionIcon}
            </div>
          )}
        </div>

        {/* Centered Golden Title */}
        <div className="absolute left-1/2 -translate-x-1/2 font-cinzel text-xs sm:text-sm font-bold text-[#ffd100] tracking-wider text-center drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate max-w-[65%]">
          {title}
        </div>

        {/* Top-right Actions & Red WoW Close Button */}
        <div className="flex items-center gap-2">
          {headerActions}
          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="w-5 h-5 rounded-[2px] bg-[#611313] hover:bg-[#851919] border border-[#a88238] hover:border-[#ffd100] flex items-center justify-center text-[11px] font-bold text-[#ffd100] shadow-[0_1px_3px_rgba(0,0,0,0.8)] transition-colors"
              title="Cerrar"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Blizzard Canonical Attached Tabs Row */}
      {tabs && (
        <div className="relative bg-[#130f0a] border-b-2 border-[#5a462e] px-2 sm:px-3 pt-2 select-none flex-shrink-0">
          {tabs}
        </div>
      )}

      {/* Window Body */}
      <div className="flex-1 p-3 sm:p-5">{children}</div>
    </div>
  );
};

// Re-export OrnateFrame as clean minimalist panel
export const OrnateFrame: React.FC<{
  children: React.ReactNode;
  className?: string;
  variant?: 'gold' | 'alliance' | 'horde' | 'stone';
  cornerSize?: number;
}> = ({ children, className = '', variant = 'gold' }) => {
  const getBorderColor = () => {
    switch (variant) {
      case 'alliance':
        return 'border-[#233f6b]';
      case 'horde':
        return 'border-[#5e1e1e]';
      case 'stone':
        return 'border-[#382d20]';
      case 'gold':
      default:
        return 'border-[#453625]';
    }
  };

  return (
    <div
      className={`wow-inner-panel rounded-[2px] p-3 sm:p-4 text-[#ded1bc] border ${getBorderColor()} ${className}`}
    >
      {children}
    </div>
  );
};
