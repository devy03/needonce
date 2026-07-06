export default function BackgroundGlow({ variant = 'default' }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#05050a]" />
      <div
        className="glow-circle animate-drift"
        style={{ width: 520, height: 520, top: -160, left: -120, background: 'radial-gradient(circle, rgba(139,92,246,0.35), transparent 70%)' }}
      />
      <div
        className="glow-circle animate-drift"
        style={{ width: 460, height: 460, top: 200, right: -140, background: 'radial-gradient(circle, rgba(96,165,250,0.28), transparent 70%)', animationDelay: '4s' }}
      />
      <div
        className="glow-circle animate-drift"
        style={{ width: 380, height: 380, bottom: -140, left: '30%', background: 'radial-gradient(circle, rgba(52,211,153,0.16), transparent 70%)', animationDelay: '8s' }}
      />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
    </div>
  );
}
