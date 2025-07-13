import React from 'react'

const MainFooter = () => {
    return (
        <div>
            <footer class="bg-dark text-white py-4">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <h5>About Us</h5>
                            <p>Welcome to our website, your trusted source for accurate and real-time weather updates. Designed with a passion for technology and ease of use, our app provides precise forecasts, live conditions, and alerts based on your location.</p>
                        </div>
                        <div class="col-md-3">
                            <h5>Links</h5>
                            <ul class="list-unstyled">
                                <li><a href="#" className="text-decoration-none text-white">Coming Soon</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Coming Soon</a></li>
                                <li><a href="#" className="text-decoration-none text-white">Coming Soon</a></li>
                            </ul>
                        </div>
                        <div class="col-md-3">
                            <h5>Contact</h5>
                             <ul className="list-unstyled">
                                <li className="text-decoration-none text-white">bcab6932@gmail.com</li>
                                <li><a href="https://github.com/preet-99" className="text-decoration-none text-white">GitHub</a></li>
                                <li><a href="https://www.linkedin.com/in/preet-vishwakarma-b775a7317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-decoration-none text-white">LinkedIn</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="https://www.facebook.com/arnav.dhimman" className="text-decoration-none text-white">Facebook</a></li>
                                <li><a href="https://www.instagram.com/__darkcipher__?igsh=dDZta3J3eXEwZHZr" className="text-decoration-none text-white">Instagram</a></li>
                                <li><a href="https://x.com/PreetVishwaka99" className="text-decoration-none text-white">Twitter</a></li>
                            </ul>
                        </div>
                    </div>
                    <hr class="my-3" />
                    <div class="row">
                        <div class="col-md-12 text-center">
                            <p class="mb-0">&copy; 2025 Preet Vishwakarma & Company. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainFooter
