import bentangSawitLogo from "@assets/bswt logo_1763556342679.webp";

export function BentangSawitLogo() {
  return (
    <div className="flex items-center justify-start">
      <img 
        src={bentangSawitLogo} 
        alt="Bentang Sawit" 
        className="h-12 w-auto"
        data-testid="img-bentang-sawit-logo"
      />
    </div>
  );
}
