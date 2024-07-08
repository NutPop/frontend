// app/layout.js
import './globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from 'next/script';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        />
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          {/* ... (Navbar เหมือนเดิม แต่ใช้ Link component) ... */}
        </nav>

        {children} 

        <footer>
          <div className="row my-3">
            <div className="col-md-12 text-center bg-light p-5 border rounded">
              Footer
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
