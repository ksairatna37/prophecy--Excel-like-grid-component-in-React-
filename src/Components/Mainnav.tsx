import React, { Component } from 'react'
import { FileText, Pencil, Eye, PlusSquare, Type, Table, HelpCircle,UserCircle } from "lucide-react";

export class Mainnav extends Component {
    render() {
        return (
            <div className="mainnav">
                <div className="tabs-bar">
                    <div className="tab">
                        <div className="icon"><FileText strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">File</div>
                    </div>

                    <div className="tab">
                        <div className="icon"><Pencil strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">Edit</div>
                    </div>

                    <div className="tab">
                        <div className="icon"><Eye strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">View</div>
                    </div>

                    <div className="tab">
                        <div className="icon"><PlusSquare strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">Insert</div>
                    </div>

                    <div className="tab">
                        <div className="icon"><Type strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">Format</div>
                    </div>

                    <div className="tab">
                        <div className="icon"><Table strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">Data</div>
                    </div>

                    <div className="tab">
                        <div className="icon"><HelpCircle strokeWidth={3} size={20} color="#2f684d" /></div>
                        <div className="tabname">Help</div>
                    </div>
                </div>
                <div className="mydata" style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                    <div className="user-logo" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "#2f684d", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <UserCircle color="#fff" size={28} />
                    </div>
                    <div className="user-info" style={{ display: "flex", flexDirection: "column", lineHeight: "1.4" }}>
                        {/* Name */}
                        <span style={{ fontWeight: "bold", fontSize: "1rem" }}>Sairatna Kamble</span>

                        {/* Email with icon (CTA) */}
                        <a
                            href="mailto:ksairatna37@gmail.com"
                            style={{
                                fontSize: "0.75rem",
                                color: "#2f684d",
                                textDecoration: "none",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.3rem",
                                fontWeight: "500"
                            }}
                        >
                        ksairatna37@gmail.com
                        </a>

                        {/* GitHub + LinkedIn */}
                        <div style={{ display: "flex", gap: "0.8rem", marginTop: "0rem"}}>
                            <a href="https://x.com/ksairatna_37" target="_blank" rel="noopener noreferrer" title="GitHub">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0,0,256,256" style={{ fill: "#2f684d" }}>
                                    <g fill="#2f684d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M11,4c-3.866,0 -7,3.134 -7,7v28c0,3.866 3.134,7 7,7h28c3.866,0 7,-3.134 7,-7v-28c0,-3.866 -3.134,-7 -7,-7zM13.08594,13h7.9375l5.63672,8.00977l6.83984,-8.00977h2.5l-8.21094,9.61328l10.125,14.38672h-7.93555l-6.54102,-9.29297l-7.9375,9.29297h-2.5l9.30859,-10.89648zM16.91406,15l14.10742,20h3.06445l-14.10742,-20z"></path></g></g>
                                </svg>
                            </a>
                            <a href="https://github.com/ksairatna37" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0,0,256,256" style={{ fill: "#2f684d" }}>
                                    <g fill="#2f684d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(3.55556,3.55556)"><path d="M36,12c13.255,0 24,10.745 24,24c0,10.656 -6.948,19.685 -16.559,22.818c0.003,-0.009 0.007,-0.022 0.007,-0.022c0,0 -1.62,-0.759 -1.586,-2.114c0.038,-1.491 0,-4.971 0,-6.248c0,-2.193 -1.388,-3.747 -1.388,-3.747c0,0 10.884,0.122 10.884,-11.491c0,-4.481 -2.342,-6.812 -2.342,-6.812c0,0 1.23,-4.784 -0.426,-6.812c-1.856,-0.2 -5.18,1.774 -6.6,2.697c0,0 -2.25,-0.922 -5.991,-0.922c-3.742,0 -5.991,0.922 -5.991,0.922c-1.419,-0.922 -4.744,-2.897 -6.6,-2.697c-1.656,2.029 -0.426,6.812 -0.426,6.812c0,0 -2.342,2.332 -2.342,6.812c0,11.613 10.884,11.491 10.884,11.491c0,0 -1.097,1.239 -1.336,3.061c-0.76,0.258 -1.877,0.576 -2.78,0.576c-2.362,0 -4.159,-2.296 -4.817,-3.358c-0.649,-1.048 -1.98,-1.927 -3.221,-1.927c-0.817,0 -1.216,0.409 -1.216,0.876c0,0.467 1.146,0.793 1.902,1.659c1.594,1.826 1.565,5.933 7.245,5.933c0.617,0 1.876,-0.152 2.823,-0.279c-0.006,1.293 -0.007,2.657 0.013,3.454c0.034,1.355 -1.586,2.114 -1.586,2.114c0,0 0.004,0.013 0.007,0.022c-9.61,-3.133 -16.558,-12.162 -16.558,-22.818c0,-13.255 10.745,-24 24,-24z"></path></g></g>
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/sairatna-kamble-95b546237/" target="_blank" rel="noopener noreferrer" title="Portfolio">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="25" viewBox="0,0,256,256" style={{ fill: "#2f684d" }}>
                                    <g fill="#2f684d" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none"><g transform="scale(5.12,5.12)"><path d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM17,20v19h-6v-19zM11,14.47c0,-1.4 1.2,-2.47 3,-2.47c1.8,0 2.93,1.07 3,2.47c0,1.4 -1.12,2.53 -3,2.53c-1.8,0 -3,-1.13 -3,-2.53zM39,39h-6c0,0 0,-9.26 0,-10c0,-2 -1,-4 -3.5,-4.04h-0.08c-2.42,0 -3.42,2.06 -3.42,4.04c0,0.91 0,10 0,10h-6v-19h6v2.56c0,0 1.93,-2.56 5.81,-2.56c3.97,0 7.19,2.73 7.19,8.26z"></path></g></g>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mainnav