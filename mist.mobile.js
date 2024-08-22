/*

    Mist Mobile JS Framework for Website development
    Written by ghgltggamer
    at : 11:36am 19 Aug 2024
    Copyright (c) ghgltggamer
    License : MIT License
    README.md contains all the information about project 
    License file : LICENSE.txt

 */
// Imported from Operating Syste Js Framework
// Mouse object m: use to get the mouse position
const Mouse = {

    x() {

        var mouse;
        function get_X(event) {
            var pos = event.clientX;
            mouse = pos;
        }
        get_X(event);

        return mouse;

    },


    y() {

        var mouse;
        function get_Y(event) {
            var pos = event.clientY;
            mouse = pos;
        }
        get_Y(event);

        return mouse;

    },

    get_Pos() {
        var x = Mouse.x();
        var y = Mouse.y();
        var build = x + "," + y;
        return build;
    }

}

// Source

// Configuration of MIST Mobile
const MIST_Mobile_Config = {
    Version: 1.0,
    Name: "Mist Mobile JS Framework",
    Author: "GHGL TG GAMER",
    Author_Contacts: {
        YouTube: "https://www.youtube.com/@ghgltggamer/",
        SocialCounts: "https://socialcounts.org/youtube-live-subscriber-count/UCr18zQWXLPyXArqlW8g3ytw/embed"
    },
    Author_Contacts_Platforms: ["YouTube", "SocialCounts"],
    VersionName: "Lumpit-Lumkit",
    VersionStatus: "Completed",
    License: "MIT License",
    License_Type: "FIle",
    License_FIle: "LICENSE.txt",
    Readme: "README.md"
}



// Initalisation function
// Initalisable
const MIST_Mobile_Button = `
.mist-mobile-btn {
            background-color: #1A73E9;
            color: white;
            border: 0px;
            border-radius: 5px;
            height: 40px;
            width: 120px;
            cursor: pointer;
            transition: 0.5s;
            font-family: 'arial';
            font-weight: bold;
            -webkit-tap-highlight-color: transparent;
            position: absolute;
            overflow: hidden;
            top: 50;
            left: 50;
        }

        .mist-mobile-btn:hover {
            /*background-color: #155ebd;*/
        }



        .mist-mobile-ripple {
            height: 40px;
            width: 40px;
            box-shadow: 0px 0px 20px 20px rgba(255, 255, 255, 0.5);
            border-radius: 100%;
            background-color: rgba(255, 255, 255, 0.5);
            position: absolute;
            top: 0px;
            left: 0px;
        }

        .mist-mobile-play-ripple {
            height: 40px;
            width: 40px;
            transition: 1s;
            animation-name: mist-mobile-play_ripple;
            animation-duration: 1s;
            animation-direction: alternate;
            animation-iteration-count: 1;
        }


        @keyframes mist-mobile-play_ripple {
            from {
                transform: scale(0.1);
            }

            to {
                transform: scale(4);
            }
        }
`;
const MIST_Mobile_Init_Everything = MIST_Mobile_Button;
function MIST_Mobile_Init(arg) {
    if (arg === MIST_Mobile_Button) {
        document.head.innerHTML = `
            <style>
                ${MIST_Mobile_Button}
            </style>
        `
    }
    else if (arg === MIST_Mobile_Init_Everything){
        document.head.innerHTML = `
            <style>
                ${MIST_Mobile_Init_Everything}
            </style>
        `
    }
    else {
        console.error("MIST Mobile : Please define a valid Initaliser to MIST_Mobile_Init()");
    }
}



// Random function
function MIST_Mobile_Random(){
    num = "MIST_MOBILE_RANDOM_";
    for (var i = 0;i <= 23;i++){
        num += Math.random() * 10;
    }
    return {
        get_number : num,
        get_number_remove_random: parseFloat(num.replace('MIST_MOBILE_RANDOM_', '')),
        get_number_add_random(random){
            return  num.replace('MIST_MOBILE_RANDOM_', random);
        }
    }
}



// Class for creating an Application with MIST Mobile WIdgets
class MIST_Mobile_Widgets {
    button(label, width = 120, height = 40,  ripple = '0, 0, 0, 0.2', click = function(){console.log('MIST MOBILE : The button was clicked!')}) {
        var btn_c = document.createElement('button');
        btn_c.classList.add('mist-mobile-btn');
        btn_c.innerText = label;
        btn_c.style.height = (height + 'px');
        btn_c.style.width = (width + 'px');
        btn_c.id = MIST_Mobile_Random().get_number_add_random('MIST_MOBILE_BUTTON-MIST_MOBILE_NATIVE_');
        // btn_c.style = css;

        return {
            render(parent) {
                parent.appendChild(btn_c);

                // Ripple effect code
                var btn = document.querySelector('.mist-mobile-btn');

                btn.addEventListener('mousedown', function () {
                    var span = document.createElement('span');
                    span.classList.add('mist-mobile-ripple');
                    span.classList.add('mist-mobile-play-ripple')
                    btn.appendChild(span);

                    var x = Mouse.x();
                    var y = Mouse.y();

                    span.style.height = btn_c.style.height;
                    span.style.width = span.style.height;

                    span.style.backgroundColor = `rgba(${ripple})`;
                    span.style.boxShadow = `0px 0px 20px 20px rgba(${ripple})`;

                    var width = parseInt(span.style.width.replace('px', ''));
                    var height = parseInt(span.style.height.replace('px', ''));

                    // console.log(`Width : ${width}`)
                    // console.log(`Height : ${height}`)

                    span.style.top = (y - height / 2 + 'px');
                    span.style.left = (x - width / 2 + 'px');

                    span.style.transform = 'scale(4)';

                    btn.addEventListener('mouseup', function () {
                        span.style.opacity = 0;
                        setTimeout(function () {
                            span.remove();
                        }, 1000);
                    })

                    btn.addEventListener('mouseleave', function () {
                        span.style.opacity = 0;
                        setTimeout(function () {
                            span.remove();
                        }, 1000);
                    })


                    btn.addEventListener('click', click);
                })
            },




            remove(){
                btn_c.remove();
            },



            event(){
                return {
                    list(){
                        return `
                            Event target : MIST_Mobile_Widgets.button() 
                            target type : MIST_Mobile_Native
                            Events available : click(callback), mouseDown(callback), mouseUp(callback), mouseLeave(callback)
                                click(callback) : takes a function and executes it when ever the widgets has been clicked
                                mouseDown(callback) : takes a function and executes it when ever the widgets suffers a mouse button down physically
                                mouseUp(callback) : takes a function and executes it when ever the widgets suffers a mouse button up physically
                                mouseLeave(callback) : takes a function and executes it when ever the widgets suffers a mouse exits it self

                        `
                    },
                    click(callback){
                        btn_c.addEventListener('click', function(){
                            callback();
                        })
                    },

                    mouseDown(callback){
                        btn_c.addEventListener('mousedown', function(){
                            callback();
                        })
                    },

                    mouseUp(callback){
                        btn_c.addEventListener('mouseUp', function(){
                            callback();
                        })
                    },

                    mouseLeave(callback){
                        btn_c.addEventListener('mouseleave', function(){
                            callback();
                        })
                    }
                }
            },



            get_Root(){
                return btn_c.id;
            },



            add_Child(child){
                btn_c.appendChild(child);
            },



            remove_Child(child){
                btn_c.removeChild(child)
            },



            get_Widget(){
                return btn_c;
            },



            remove_Children(){
                btn_c.innerHTML = "";
            },



            add_Child_From_Id(id){
                var get_Element = document.getElementById(id);
                btn_c.appendChild(get_Element);
            },


            remove_Child_From_Id(id){
                var get_Element = document.getElementById(id).remove();
            },


            hide(){
                btn_c.style.display='none';
            },

            show(){
                btn_c.style.display='block';
            }
        }
    }
};






// Styling function
function MIST_Mobile_Style(element){
    var widget = document.getElementById(element);

    return {
        backgroundColor(color){
            widget.style.backgroundColor = color;
        },

        color(_color_){
            widget.style.color = _color_;
        },

        border(css){
            widget.style.border = css;
        },

        borderRadius(numeric){
            widget.style.borderRadius = (numeric + 'px')
        },

        margin(numeric){
            widget.style.margin = (numeric + 'px')
        },

        marginLeft(numeric){
            widget.style.marginLeft = (numeric + 'px')
        },

        marginRight(numeric){
            widget.style.marginRight = (numeric + 'px')
        },

        marginTop(numeric){
            widget.style.marginTop = (numeric + 'px')
        },

        marginBottom(numeric){
            widget.style.marginBottom = (numeric + 'px')
        },

        padding(numeric){
            widget.style.padding = (numeric + 'px')
        },

        paddingLeft(numeric){
            widget.style.paddingLeft = (numeric + 'px')
        },

        paddingRight(numeric){
            widget.style.paddingRight = (numeric + 'px')
        },

        paddingTop(numeric){
            widget.style.paddingTop = (numeric + 'px')
        },

        paddingBottom(numeric){
            widget.style.paddingBottom = (numeric + 'px')
        },

        boxShadow(css){
            widget.style.boxShadow = css;
        },

        textShadow(css){
            widget.style.textShadow = css;
        },

        cursor(css){
            widget.style.cursor = css;
        },

        font(string){
            widget.style.font = string;
        },

        fontSize(numeric){
            widget.style.fontSize = (numeric + 'px');
        },

        fontWeight(numeric){
            widget.style.fontWeight = numeric;
        }
    }
}



// This was ended by ghgltggamer officially at Aug 20 2024, 20:16pm