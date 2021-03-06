export default function Layout({ children }) {
  return (
    <>
      {children}
      <style jsx global>{`
        li, ol, ul {
          padding: 0;
          margin: 0;
        }
        a{
          text-decoration: none;
        }
        body {
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"
          color: #444;
        }
      `}</style>
    </>
  )
}
