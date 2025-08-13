import Card from "./components/card";

const CardContent = () => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
    <h1 style={{
      fontSize: '20px',
      textAlign: 'center',
      margin: '0'
    }}>Emergency fund</h1>
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Status</span>
        <span>Live</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Status</span>
        <span>Live</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Status</span>
        <span>Live</span>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Status</span>
        <span>Live</span>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <div
      style={{
        minWidth: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        display: "flex",
        flexWrap: "wrap",
        padding: "1rem",
        gap: "1rem",
      }}
    >
      <Card>
        <CardContent />
      </Card>

      <Card width={300} height={500}>
        <CardContent />
      </Card>

      <Card width={380} height={500}>
        <CardContent />
      </Card>

      <Card width={500} height={300}>
        <CardContent />
      </Card>
      {/* Same as above but aspect ratio is maintained, so height will be relative to width */}
      <Card width={500} height={300} maintainAspectRatio>
        <CardContent />
      </Card>
    </div>
  );
}

export default App;
