import React from "react";
import {LearnersDictionary} from "mw-dict";
const dict = new LearnersDictionary("69427bc5-ce2b-4b76-b049-506e0772b610");
const box = document.querySelector(".text");
document.addEventListener("click", function(event) {
    if (event.target !== document.getElementById("text")) {
        document.getElementById("meaning").style.visibility = "hidden";
    }
});
class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selText: "", meaning: ""};
        this.getSelectedText = this.getSelectedText.bind(this);
    }
    getSelectedText(e) {
        console.log(e.clientX, e.clientY);
        this.left = e.clientX;
        this.top = e.clientY;
        var selObj = window.getSelection();
        this.state.selText = selObj.toString().trim();
        dict.lookup(this.state.selText).then(
            function (result) {
                this.meaning = result[0].definition[0].meanings[0].substring(2);
                console.log(result);
                this.setState({meaning: this.meaning});
                document.getElementById("meaning").style.visibility = "visible";
            }.bind(this)).catch((err) => {});
        
    }
    render() {
        return(
            <div id = "text" onClick={this.getSelectedText}>
                When I first brought my cat home from the humane society she was a mangy, pitiful animal. It cost a lot to adopt her: forty dollars. And then I had to buy litter, a litterbox, food, and dishes for her to eat out of. Two days after she came home with me she got taken to the pound by the animal warden. There's a leash law for cats in Fort Collins. If they're not in your yard they have to be on a leash. Anyway, my cat is my best friend. I'm glad I got her. She sleeps under the covers with me when it's cold. Sometimes she meows a lot in the middle of the night and wakes me up, though. (unfocused)

                When I first brought my cat home from the Humane Society she was a mangy, pitiful animal. She was so thin that you could count her vertebrae just by looking at her. Apparently she was declawed by her previous owners, then abandoned or lost. Since she couldn't hunt, she nearly starved. Not only that, but she had an abscess on one hip. The vets at the Humane Society had drained it, but it was still scabby and without fur. She had a terrible cold, too. She was sneezing and sniffling and her meow was just a hoarse squeak. And she'd lost half her tail somewhere. Instead of tapering gracefully, it had a bony knob at the end. (focused)
                <div id="meaning" style={{position: "absolute",left: this.left, top: this.top, width: "300px",zIndex: 10, backgroundColor: "yellow", borderRadius: "6px"}}>{this.state.meaning}</div>

            </div>
        );
    }
}
export {HomePage}