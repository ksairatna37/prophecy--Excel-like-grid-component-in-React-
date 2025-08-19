import React, { Component } from 'react'
import { Clipboard, Scissors, Copy, PaintbrushVertical } from "lucide-react";

export class Clipboardsection extends Component {
    render() {
        return (
            <div className="bottomcontainerchild1tab-bar-tab clipboard">
                <div className="clipboard-icons">
                    <div className="clipboard-icon">
                        <Clipboard strokeWidth={2} size={22} />
                        <span>Paste</span>
                    </div>
                    <div className="clipboard-icon">
                        <Scissors strokeWidth={2} size={22} />
                        <span>Cut</span>
                    </div>
                    <div className="clipboard-icon">
                        <Copy strokeWidth={2} size={22} />
                        <span>Copy</span>
                    </div>
                    <div className="clipboard-icon">
                        <PaintbrushVertical strokeWidth={2} size={22} />
                        <span>Painter</span>
                    </div>
                </div>
                <div className="clipboard">Clipboard</div>
            </div>
        )
    }
}

export default Clipboardsection