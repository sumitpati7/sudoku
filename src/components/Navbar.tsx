import { Difficulty } from '@interfaces/game';
import ClockIcon from '@assets/svgs/ClockIcon';
import LogoIcon from '@assets/svgs/LogoIcon';
import SettingsIcon from '@assets/svgs/SettingsIcon';

interface NavbarProps {
  difficulty: Difficulty;
  onDifficultyChange: (d: NavbarProps['difficulty']) => void;
  time: string;
  mistakes: number;
  onNewGame: () => void;
  onSettings: () => void;
}

const DIFFICULTIES: Difficulty[] = ['Easy', 'Medium', 'Hard', 'Expert'];

export default function Navbar({
  difficulty,
  onDifficultyChange,
  time,
  mistakes,
  onNewGame,
  onSettings,
}: NavbarProps) {
  return (
    <header className="border-b border-outline-variant bg-surface-container-lowest">
      <div className="mx-auto flex max-w-260 items-center justify-between gap-4 px-6 py-3">
        {/* Brand */}
        <div className="flex items-center gap-2.5">
          <span className="grid size-9 place-items-center rounded-lg bg-primary-container text-white">
            <LogoIcon />
          </span>
          <span className="text-headline-md text-on-surface">Sudoku Mind</span>
        </div>

        {/* Difficulty tabs */}
        <nav className="flex items-center gap-7" aria-label="Difficulty">
          {DIFFICULTIES.map((d) => (
            <button
              key={d}
              onClick={() => onDifficultyChange(d)}
              className={`border-b-2 pb-1 text-title-sm transition-colors ${
                d === difficulty
                  ? 'border-primary font-semibold text-primary'
                  : 'border-transparent font-medium text-on-surface-variant hover:text-on-surface'
              }`}
            >
              {d}
            </button>
          ))}
        </nav>

        {/* Controls */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 rounded-full bg-surface-container-low px-3 py-1.5 text-body-md text-on-surface">
            <ClockIcon className="size-4 text-on-surface-variant" />
            {time}
          </span>

          <span className="text-body-sm">
            <span className="text-on-surface-variant">Mistakes </span>
            <span className="font-semibold text-error">{mistakes}/3</span>
          </span>

          <button
            onClick={onSettings}
            aria-label="Settings"
            className="grid size-9 place-items-center rounded-full text-on-surface-variant transition-colors hover:bg-surface-container-low hover:text-on-surface"
          >
            <SettingsIcon />
          </button>

          <button
            onClick={onNewGame}
            className="rounded-lg bg-primary-container px-4 py-2 text-title-sm text-on-primary transition-colors hover:bg-primary"
          >
            New Game
          </button>
        </div>
      </div>
    </header>
  );
}
