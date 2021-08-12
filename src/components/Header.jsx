import React from 'react'

const Header = () => {
    return (
        <header>
            <a href="/" className="logo">
                <svg viewBox="0 0 20 20">
                    <polygon fill-rule="evenodd" points='10,40 10,0 45,30' transform="translate(-2 -2)"></polygon>
                </svg>
            </a>

            <div className="ac">
                <p>
                    <a href="//github.com/nikfedotoff/idiomic" target="_blank" rel="noreferrer">github.com/idiomic ↗</a>
                </p>
                {/* <div className="socials">
                    <a href="" target="_blank" rel="noreferrer">
                        <svg aria-label="Twitter Icon" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd"><rect width="24" height="24"></rect><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M22,4.00932808 C21.1294409,4.62329958 20.1655526,5.09288927 19.1454545,5.40001323 C18.0239632,4.11070975 16.2167,3.65857939 14.6200741,4.26788048 C13.0234481,4.87718156 11.9770912,6.41830459 12,8.12684684 L12,9.03579138 C8.75514984,9.11991638 5.68365937,7.57418176 3.81818182,4.91827262 C3.81818182,4.91827262 0.181818182,13.0987735 8.36363636,16.7345516 C6.49138869,18.0052255 4.26105174,18.642362 2,18.5524407 C10.1818182,23.0971634 20.1818182,18.5524407 20.1818182,8.09957851 C20.180981,7.84639531 20.1566341,7.59383668 20.1090909,7.34515454 C21.036912,6.43029557 21.6916613,5.27522676 22,4.00932808 Z"></path></g>
                        </svg>
                    </a>
                    <a href="" target="_blank" rel="noreferrer">
                        <svg aria-label="Facebook Icon" viewBox="0 0 24 24">
                            <g fill="none" fill-rule="evenodd"><rect width="24" height="24"></rect><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M16,8 L14.5,8 C13.1192881,8 12,9.11928813 12,10.5 L12,22 L12,22 M15,12.9489451 L10,12.9489451"></path></g>
                        </svg>
                    </a>
                </div> */}
            </div>
        </header>
    )
}

export default Header
