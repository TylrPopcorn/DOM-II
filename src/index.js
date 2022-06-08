import './less/index.less'

// Your code goes here!

console.log("hello world")

let vars = { //All of our variables used.
    scroll_triggrd: false,
    resize_triggrd: false,
    copy_triggrd: false,
    keydown_triggrd: false,
    click_triggrd: false,
    dblclick_triggrd: false,
    mouseMove_triggrd: false,
    //NOTE: I added this here so that the output doesn't get spammed up with comments.
}

//1
window.onload = function (evnt) { //Each time the window loads up.
    //NOTE: 'onLoad' does not work.
    console.log(`${evnt.type} event fired on 'window'!`)

    const heading = document.querySelector('h1')
    heading.textContent = "RUN BUS!";

    //3
    window.addEventListener('copy', function (val) { //Each time the user copies something on the window page.
        navigator.clipboard.readText().then(text => {
            if (vars.copy_triggrd == false) {
                console.log(`${val.type} event fired on 'window'! User copied: 
            ${text}`);
                vars.copy_triggrd = true;
            }

            heading.textContent = (text);
        });
    })

    //5
    window.addEventListener('keydown', function (val) { //Each time the user presses down on the keyboard.
        if (vars.keydown_triggrd == false) {
            console.log(`${val.type} event fired on 'window'! User pressed key: ${val.key}.`)
            vars.keydown_triggrd = true
        }
    })

    // 2
    window.onscroll = function (evnt) { //Each time the window gets scrolled on.
        if (vars.scroll_triggrd == false) { //This will minimize output.
            console.log(`${evnt.type} event fired on window! Current scroll timeStamp: ${evnt.timeStamp}`);
            vars.scroll_triggrd = true;
        }

        heading.textContent = ("SCROLLING BUS!");
    }

    //4
    window.onresize = function (val) { //Each time the window gets re-sized.
        if (vars.resize_triggrd == false) { //This will minimize output.
            console.log(`${val.type} event fired on window! Current resize timeStamp: ${val.timeStamp}`);
            vars.resize_triggrd = true;
        }

        heading.textContent = ("SIZABLE BUS!");
    }

    //8
    document.body.addEventListener('mousemove', function (obj) {
        if (vars.mouseMove_triggrd == false) { //This will minimize output.
            console.log(`${obj.type} event fired on document body! Mouse coordinates: ${obj.clientX}, ${obj.clientY}.`);
            vars.mouseMove_triggrd = true;
        }
    })

    //6
    window.addEventListener('click', (val) => { //Each time something gets clicked on the window.
        if (vars.click_triggrd == false) { //This will minimize output.
            console.log(`${val.type} event fired on window!`);
            vars.click_triggrd = true;
        }

        val.target.classList.toggle("yay")
    })

    //7
    document.body.addEventListener('dblclick', function (value) {
        if (vars.dblclick_triggrd == false) { //This will minimize output.
            console.log(`${value.type} event fired on document body!`);
            vars.dblclick_triggrd = true;
        }
        value.target.outerHTML = '' //Get rid of this element.
    })
}

