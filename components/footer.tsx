export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-lg font-light mb-4">ÉLAN</h3>
            <p className="text-sm text-gray-600">Timeless fashion designed for the modern world.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-sm mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Women
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Men
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Accessories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h4 className="font-medium text-sm mb-4">Help</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-sm mb-4">Follow</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  Pinterest
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-gray-600 hover:text-foreground transition-colors">
                  TikTok
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; 2025 ÉLAN. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
