export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="py-8 border-t border-green-700/30 mt-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
        <p>© {currentYear} Sumesh Pradhan. All rights reserved.</p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/sum35h" 
            target="_blank" 
            rel="noreferrer" 
            className="matrix-link"
          >
            GitHub
          </a>
          <a 
            href="https://linkedin.com/in/sumeshpradhan" 
            target="_blank" 
            rel="noreferrer" 
            className="matrix-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
