export default function Modal({
  open = false,
  content,
  onClose
}: {
  open?: boolean;
  content: JSX.Element;
  onClose: () => void;
}) {
  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 50
      }}
    >
      <div
        onClick={onClose}
        style={{
          position: 'absolute',
          inset: 0,
          backdropFilter: 'blur(4px)'
        }}
      />

      <div
        style={{
          width: 'clamp(20rem, 90vw, 50rem)',
          height: '40rem',
          backgroundColor: 'white',
          zIndex: 60
        }}
      />
    </div>
  );
}
