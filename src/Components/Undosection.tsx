import React, { Component } from 'react'
import {RotateCcw, RotateCw } from "lucide-react";

export class Undosection extends Component {
    render() {
        return (
            <div className="bottomcontainerchild1tab-bar-tab undo">
                <div className="undo-icons">
                    <div className="undo-icon">
                        <RotateCcw strokeWidth={2} size={30} />
                    </div>
                    <div className="undo-icon">
                        <RotateCw strokeWidth={2} size={30} />
                    </div>
                </div>
                <div className="clipboard">Undo</div>
            </div>

        )
    }
}

export default Undosection