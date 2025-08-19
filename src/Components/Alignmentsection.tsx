import { Component } from 'react'

export class Alignmentsection extends Component {
    render() {
        return (
            <div className="bottomcontainerchild1tab-bar-tab alignment">
                <div className="alignment-icons">
                    <div className="align-icon">≡</div>     {/* Align Left */}
                    <div className="align-icon">≡</div>     {/* Align Center */}
                    <div className="align-icon">≡</div>     {/* Align Right */}
                    <div className="align-icon">≡</div>     {/* Justify */}
                    <div className="align-icon">↕</div>     {/* Top Align */}
                    <div className="align-icon">↔</div>     {/* Middle Align */}
                    <div className="align-icon">⇵</div>     {/* Bottom Align */}
                    <div className="align-icon">⇔</div>     {/* Distribute Vertically */}
                    <div className="align-icon">⇿</div>     {/* Distribute Horizontally */}
                </div>
                <div className="alignment-label">Alignment</div>
            </div>
        )
    }
}

export default Alignmentsection