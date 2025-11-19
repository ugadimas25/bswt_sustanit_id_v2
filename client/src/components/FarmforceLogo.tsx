import farmforceLogo from "@assets/Farmforce_Logo_WHITE_1763527950704.png";

export function FarmforceLogo() {
  return (
    <div className="flex items-center justify-start">
      <img 
        src={farmforceLogo} 
        alt="Farmforce" 
        className="h-12 w-auto"
        data-testid="img-farmforce-logo"
      />
    </div>
  );
}
