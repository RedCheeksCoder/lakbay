import "@styles/globals.css";

export const metadata = {
  title: "Lakbay PH",
  description: "Live like in your own home. Booking cheaper than hotels.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app"> {children}</main>
      </body>
    </html>
  );
}

export default RootLayout;