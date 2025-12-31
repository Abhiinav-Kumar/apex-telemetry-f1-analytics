export interface DriverInfo {
  name: string;
  team: string;
  carNumber?: number;
  tyreCompound?: 'Soft' | 'Medium' | 'Hard' | 'Inter' | 'Wet';
  currentLap?: number;
  session?: string;
  team_color?: string;
  number?: string;
  code?: string;
  driver_image_url?: string;
}
