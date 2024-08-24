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

const MIST_Mobile_Input = `
.mist-mobile-input-widget{
            border: 1px solid silver;
            padding: 5px;
            border-radius: 5px;
            cursor: pointer;
            font-family: 'quicksand', Arial, monospace;
            transition: 0.5s;
            outline: none;
            height: 30px;
            width: 250px;
            padding-left: 12px;
        }
        .mist-mobile-input-widget:hover{
            outline: 0.5px solid black;
        }

        .mist-mobile-input-widget:focus{
            outline: 0px;
            border: 3px solid rgb(118, 161, 226);
            cursor: text;
        }
`;

const MIST_Mobile_Init_Everything = MIST_Mobile_Button + MIST_Mobile_Input;
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
    else if (arg === MIST_Mobile_Input){
        document.head.innerHTML = `
            <style>
                ${MIST_Mobile_Input}
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


        var mist_widget = document.createElement('mist_mobile_widget');
        mist_widget.id = MIST_Mobile_Random().get_number_add_random("MIST_MOBILE_WIDGET-MIST_MOBILE_NATIVE_ROOT_");

        var mist_widget_cache = document.createElement('mist_mobile_widget_cache');
        mist_widget_cache.id = MIST_Mobile_Random().get_number_add_random("MIST_MOBILE_CACHE-MIST_MOBILE_WIDGET_CACHE_");
        mist_widget_cache.style.display = 'none';

        return {
            render(parent) {
                parent.appendChild(mist_widget);
                mist_widget.appendChild(btn_c);
                parent.appendChild(mist_widget_cache);

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

                    // var btn_c_bounding_rect = btn_c.getBoundingClientRect();

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



            event(type, callback){
                btn_c.addEventListener(type, callback)
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
            },

            // main method for controlling the main root, This is the most powerfull root for everywidget exept button becase exept button every other widget has a main root which helps in better and more controlled manipulation on widget. 
            main(){
                return {
                    get_Root(){
                        return mist_widget.id;
                    },
        
        
        
                    add_Child(child){
                        mist_widget.appendChild(child);
                    },
        
        
        
                    remove_Child(child){
                        mist_widget.removeChild(child)
                    },
        
        
        
                    get_Widget(){
                        return mist_widget;
                    },
        
        
        
                    remove_Children(){
                        mist_widget.innerHTML = "";
                    },
        
        
        
                    add_Child_From_Id(id){
                        var get_Element = document.getElementById(id);
                        mist_widget.appendChild(get_Element);
                    },
        
        
                    remove_Child_From_Id(id){
                        var get_Element = document.getElementById(id).remove();
                    },
        
        
                    hide(){
                        mist_widget.style.display='none';
                    },
        
                    show(){
                        mist_widget.style.display='block';
                    },

                    // cache controll , This is a widget cache controll and not a full fledged cache because widget caches are not as robust as mist normal cache are but these caches can be used to quick data rendering and parsing
                    add_Cache_Data(data){
                        mist_widget_cache.innerHTML += data;
                    },

                    clear_Cache_Data(){
                        mist_widget_cache.innerHTML = '';
                    },

                    get_Cache_Data(){
                        return mist_widget_cache.innerHTML;
                    }
                }
            }
        }
    }


    // Input widget
    input(placeholder, width = 120, height = 40, click = function(){console.log('MIST MOBILE : The button was clicked!')}) {
        var input = document.createElement('input');
        input.classList.add('mist-mobile-input-widget');
        input.placeholder = placeholder;
        input.style.height = (height + 'px');
        input.style.width = (width + 'px');
        input.id = MIST_Mobile_Random().get_number_add_random('MIST_MOBILE_INPUT-MIST_MOBILE_NATIVE_');
        // btn_c.style = css;


        var mist_widget = document.createElement('mist_mobile_widget');
        mist_widget.id = MIST_Mobile_Random().get_number_add_random("MIST_MOBILE_WIDGET-MIST_MOBILE_NATIVE_ROOT_");

        var mist_widget_cache = document.createElement('mist_mobile_widget_cache');
        mist_widget_cache.id = MIST_Mobile_Random().get_number_add_random("MIST_MOBILE_CACHE-MIST_MOBILE_WIDGET_CACHE_");
        mist_widget_cache.style.display = 'none';

        return {
            render(parent) {
                parent.appendChild(mist_widget);
                mist_widget.appendChild(input);
                parent.appendChild(mist_widget_cache);
            },




            remove(){
                input.remove();
            },



            event(type, callback){
                btn_c.addEventListener(type, callback)
            },



            get_Root(){
                return input.id;
            },



            add_Child(child){
                input.appendChild(child);
            },



            remove_Child(child){
                input.removeChild(child)
            },



            get_Widget(){
                return input;
            },



            remove_Children(){
                input.innerHTML = "";
            },



            add_Child_From_Id(id){
                var get_Element = document.getElementById(id);
                input.appendChild(get_Element);
            },


            remove_Child_From_Id(id){
                var get_Element = document.getElementById(id).remove();
            },


            hide(){
                input.style.display='none';
            },

            show(){
                input.style.display='block';
            },


            // widget specific methods
            value(text = null){
                if (text === null){
                    return input.value;
                }
                else {
                    input.value = text;
                }
            },

            placeholder(text = null){
                if (text === null){
                    return input.placeholder;
                }
                else {
                    input.placeholder = text;
                }
            },


            // main method for controlling the main root, This is the most powerfull root for everywidget exept button becase exept button every other widget has a main root which helps in better and more controlled manipulation on widget. 
            main(){
                return {
                    get_Root(){
                        return mist_widget.id;
                    },
        
        
        
                    add_Child(child){
                        mist_widget.appendChild(child);
                    },
        
        
        
                    remove_Child(child){
                        mist_widget.removeChild(child)
                    },
        
        
        
                    get_Widget(){
                        return mist_widget;
                    },
        
        
        
                    remove_Children(){
                        mist_widget.innerHTML = "";
                    },
        
        
        
                    add_Child_From_Id(id){
                        var get_Element = document.getElementById(id);
                        mist_widget.appendChild(get_Element);
                    },
        
        
                    remove_Child_From_Id(id){
                        var get_Element = document.getElementById(id).remove();
                    },
        
        
                    hide(){
                        mist_widget.style.display='none';
                    },
        
                    show(){
                        mist_widget.style.display='block';
                    },

                    // cache controll , This is a widget cache controll and not a full fledged cache because widget caches are not as robust as mist normal cache are but these caches can be used to quick data rendering and parsing
                    add_Cache_Data(data){
                        mist_widget_cache.innerHTML += data;
                    },

                    clear_Cache_Data(){
                        mist_widget_cache.innerHTML = '';
                    },

                    get_Cache_Data(){
                        return mist_widget_cache.innerHTML;
                    }
                }
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




// dedicated caching system on page
function MIST_Mobile_Cache(parent = document.head){// Used for creating cache
    var cache = document.createElement("mist_mobile_cache");
    cache.id = MIST_Mobile_Random().get_number_add_random("MIST_MOBILE_CACHE-MIST_MOBILE_CACHE_INDEPENDENT_");
    cache.style.display = "none";
    parent.appendChild(cache);
    
    return {
        add_Child(child){
            var mist_cache_child = document.createElement('mist_cache_child');
            mist_cache_child.classList.add("mist-cache-child");
            cache.appendChild(mist_cache_child);
            mist_cache_child.appendChild(child);
        },

        remove_Child(index){
            var child = document.getElementsByClassName('mist-cache-child');
            child[index].remove();
        },

        get_Child(index){
            var child = document.getElementsByClassName('mist-cache-child');
            return child[index];
        },

        get_Child_Data(index){
            var child = document.getElementsByClassName('mist-cache-child');
            return child[index].innerHTML;
        },

        remove_Children(){
            cache.innerHTML = '';
        },

        clear(){
            cache.innerHTML = '';
        },

        // searched_Child:"",

        // search_Child(string){
        //     var child = document.getElementsByClassName('mist-cache-child');
        //     for (var len = 0;len > child.length;len++){
        //         if (child[len].includes(string)){
        //             this.search_Child = child[len]
        //             break;
        //         }
        //     }
        // },

        add_Child_Html(html){
            var mist_cache_child = document.createElement('mist_cache_child');
            mist_cache_child.classList.add("mist-cache-child");
            cache.appendChild(mist_cache_child);
            mist_cache_child.innerHTML += html;
        }
    }

}



// This was ended by ghgltggamer officially at Aug 20 2024, 20:16pm
// New update was started with input() on Aug 24 2024 , timing of starting is not avaiable but ending was 20:18pm on same day and took some hours