const navbar_1 = {
    html: `<div class="navbar-1" >
    <h2 class="nav-title-1">Navbar</h2>
    <a href="#" class="nav-link-1">Home</a>
    <a href="#" class="nav-link-1">About</a>
    <a href="#" class="nav-link-1">Blog</a>
</div>\n\n`,
    css: `.navbar-1 {
    background-color: rgb(226, 226, 226);
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
}

.nav-title-1 {
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 7px;
    font-weight: 100;
    margin-right: 20px;
}

.nav-link-1 {
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    text-decoration: none;
    margin: auto 0px;
    padding: 10px 15px;
    transition: all 0.4s ease;
}

.nav-link-1:hover {
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    text-decoration: none;
    margin: auto 0px;
    opacity: 0.7;
    background-color: rgb(212, 212, 212);
    border-radius: 7px;
    padding: 10px 15px;
}\n\n`,
    responsive_css: `.navbar-1 {
    background-color: rgb(226, 226, 226);
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
}\n\n`
};

const navbar_2 = {
    html: `<div class="navbar-2">
    <h2 class="nav-title-1">Navbar</h2>
    <a href="#" class="nav-link-1">Home</a>
    <a href="#" class="nav-link-1">About</a>
    <a href="#" class="nav-link-1">Blog</a>
</div>\n\n`,
    css: `.navbar-2 {
    background-color: rgb(226, 226, 226);
    padding: 0px 20px;
    display: flex;
    flex-direction: row;
    border-radius: 15px;
}\n\n`,
    responsive_css: `.navbar-2 {
    background-color: rgb(226, 226, 226);
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
}\n\n`
};

const header_1 = {
    html: `<div class="header-1">
    <h1 class="header-title-1">Header Text</h1>
</div>\n\n`,
    css: `.header-1 {
    display: flex;
    width: 100%;
    height: 75vh;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.header-title-1 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
}\n\n`,

};

const header_2 = {
    html: `<div class="header-2">
    <button class="header-button-2">- Header Button -</button>
</div>\n\n`,
    css: `.header-2 {
    display: flex;
    width: 100%;
    height: 75vh;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.header-button-2 {
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 20px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    outline: none;
    transition: all 0.4s ease;
}

.header-button-2:hover {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 100;
    background-color: transparent;
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    opacity: 0.8;
}\n\n`
};

const header_3 = {
    html: `<div class="header-3">
    <h1 class="header-title-3">- Header Text -</h1>
    <button class="header-button-3">- Header Button -</button>
</div>\n\n`,
    css: `.header-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75vh;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.header-title-3 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    margin-bottom: 50px;
}

.header-button-3 {
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 20px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    outline: none;
    transition: all 0.4s ease;
}

.header-button-3:hover {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 100;
    background-color: transparent;
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    opacity: 0.8;
}\n\n`
};

const main_1 = {
    html: `<div class="main-1">
    <div class="main-image-1"></div>
    <h1 class="main-title-1">- Main Title Text -</h1>
</div>\n\n`,
    css: `.main-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-title-1 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    font-size: 20px;
    margin-bottom: 50px;
}

.main-image-1 {
    width: 200px;
    height: 200px;
    background-color: rgb(158, 158, 158);
    margin-bottom: 50px;
    border-radius: 50%;
    background-image: url();
    background-size: cover;
}\n\n`
};

const main_2 = {
    html: `<div class="main-1">
    <div class="main-image-1"></div>
    <h1 class="main-title-1">- Main Title Text -</h1>
    <button class="main-button-1">- Main Button -</button>
</div>\n\n`,
    css: `.main-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-title-1 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    font-size: 20px;
    margin-bottom: 50px;
}

.main-image-1 {
    width: 200px;
    height: 200px;
    background-color: rgb(158, 158, 158);
    margin-bottom: 50px;
    border-radius: 50%;
    background-image: url();
    background-size: cover;
}

.main-button-1 {
    text-align: center;
    margin: 0px;
    color: whitesmoke;
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 15px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    outline: none;
    transition: all 0.4s ease;
}

.main-button-1:hover {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 100;
    background-color: transparent;
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    opacity: 0.8;
}\n\n`
};

const main_3 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <p class="main-item-text-3">- Main Item Text -</p>
        <button class="main-item-button-3">- Button -</button>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <p class="main-item-text-3">- Main Item Text -</p>
        <button class="main-item-button-3">- Button -</button>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <p class="main-item-text-3">- Main Item Text -</p>
        <button class="main-item-button-3">- Button -</button>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-image-3 {
    width: 7vw;
    height: 7vw;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}

.main-item-text-3 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 0px;
    font-weight: 100;
    margin-bottom: 50px;
}

.main-item-button-3 {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 10px 20px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    transition: all 0.4s ease;
}

.main-item-button-3:hover {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    opacity: 0.8;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}
.main-item-image-3 {
    width: 150px;
    height: 150px;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}`
};

const main_3_1 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <p class="main-item-text-3">- Main Item Text -</p>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <p class="main-item-text-3">- Main Item Text -</p>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <p class="main-item-text-3">- Main Item Text -</p>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-image-3 {
    width: 7vw;
    height: 7vw;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}

.main-item-text-3 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 0px;
    font-weight: 100;
    margin-bottom: 50px;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}
.main-item-image-3 {
    width: 150px;
    height: 150px;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}`
};

const main_3_2 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-image-3 {
    width: 7vw;
    height: 7vw;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}
.main-item-image-3 {
    width: 150px;
    height: 150px;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}`
};

const main_3_3 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <p class="main-item-text-3">- Main Item Text -</p>
    </div>
    <div class="main-item-3">
        <p class="main-item-text-3">- Main Item Text -</p>
    </div>
    <div class="main-item-3">
        <p class="main-item-text-3">- Main Item Text -</p>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-text-3 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 0px;
    font-weight: 100;
    margin-bottom: 50px;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}`
};

const main_3_4 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <button class="main-item-button-3">- Button -</button>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <button class="main-item-button-3">- Button -</button>
    </div>
    <div class="main-item-3">
        <div class="main-item-image-3"></div>
        <button class="main-item-button-3">- Button -</button>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-image-3 {
    width: 7vw;
    height: 7vw;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}

.main-item-button-3 {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 10px 20px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    transition: all 0.4s ease;
}

.main-item-button-3:hover {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    opacity: 0.8;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}
.main-item-image-3 {
    width: 150px;
    height: 150px;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}`
};

const main_3_5 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <p class="main-item-text-3">- Main Item Text -</p>
        <button class="main-item-button-3">- Button -</button>
    </div>
    <div class="main-item-3">
        <p class="main-item-text-3">- Main Item Text -</p>
        <button class="main-item-button-3">- Button -</button>
    </div>
    <div class="main-item-3">
        <p class="main-item-text-3">- Main Item Text -</p>
        <button class="main-item-button-3">- Button -</button>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-text-3 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 0px;
    font-weight: 100;
    margin-bottom: 50px;
}

.main-item-button-3 {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 10px 20px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    transition: all 0.4s ease;
}

.main-item-button-3:hover {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 12px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    margin-bottom: 50px;
    margin-top: 50px;
    opacity: 0.8;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}`
};

const main_3_6 = {
    html: `<div class="main-3">
    <div class="main-item-3">
        <button class="main-item-button-3-6">Button</button>
    </div>
    <div class="main-item-3">
        <button class="main-item-button-3-6">Button</button>
    </div>
    <div class="main-item-3">
        <button class="main-item-button-3-6">Button</button>
    </div>
</div>\n\n`,
    css: `.main-3 {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: fit-content;
    min-height: 75vh;
    padding: 100px auto;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
}

.main-item-3 {
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 100px 2%;
    width: 20%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-item-image-3 {
    width: 7vw;
    height: 7vw;
    background-color: rgb(153, 153, 153);
    border-radius: 50%;
    margin: 30px auto;
}

.main-item-text-3 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 0px;
    font-weight: 100;
    margin-bottom: 50px;
}

.main-item-button-3-6 {
    display: block;
    text-align: center;
    margin: 0px;
    color: var(--first);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 20px;
    background-color: rgb(158, 158, 158);
    border: 5px solid rgb(153, 153, 153);
    padding: 10px 20px;
    border-radius: 50px;
    outline: none;
    margin: auto;
    transition: all 0.4s ease;
}

.main-item-button-3-6:hover {
    text-align: center;
    margin: auto;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 2px;
    font-weight: 100;
    background-color: transparent;
    border: 5px solid rgb(153, 153, 153);
    padding: 20px 30px;
    opacity: 0.8;
}\n\n`,
    responsive_css: `.main-3 {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-item-3 {
    padding: 20px;
    border-radius: 10px;
    background-color: rgb(226, 226, 226);
    margin: 50px auto;
    padding-bottom: 50px;
    width: 70%;
}`
};

const main_4 = {
    html: `<div class="main-4">
    <div class="main-image-4"></div>
    <h1 class="main-title-4">- Main Title Text -</h1>
</div>\n\n`,
    css: `.main-4 {
    display: flex;
    flex-direction: row-reverse;
    width: 100%;
    min-height: 75vh;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-title-4 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    font-size: 20px;
    margin-bottom: 50px;
}

.main-image-4 {
    width: 300px;
    height: 300px;
    background-color: rgb(158, 158, 158);
    margin-bottom: 50px;
    border-radius: 50%;
    background-image: url();
    background-size: cover;
    margin-left: 100px;
}\n\n`,
    responsive_css: `.main-4 {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 75vh;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-image-4 {
    margin-left: 0px;
    width: 200px;
    height: 200px;
}\n\n`
};

const main_5 = {
    html: `<div class="main-5">
    <div class="main-image-5"></div>
    <h1 class="main-title-5">- Main Title Text -</h1>
</div>\n\n`,
    css: `.main-5 {
    display: flex;
    flex-direction: row;
    width: 100%;
    min-height: 75vh;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.main-title-5 {
    text-align: center;
    margin: 0px;
    color: var(--fourth);
    font-family: "Courier New", Courier, monospace;
    letter-spacing: 5px;
    font-weight: 100;
    font-size: 20px;
    margin-bottom: 50px;
}

.main-image-5 {
    width: 300px;
    height: 300px;
    background-color: rgb(158, 158, 158);
    margin-bottom: 50px;
    border-radius: 50%;
    background-image: url();
    background-size: cover;
    margin-right: 100px;
}\n\n`,
    responsive_css: `.main-5 {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 75vh;
    height: fit-content;
    background-color: whitesmoke;
    align-items: center;
    align-content: center;
    justify-content: center;
}
.main-image-5 {
    width: 200px;
    height: 200px;
    background-color: rgb(158, 158, 158);
    margin-bottom: 50px;
    border-radius: 50%;
    background-image: url();
    background-size: cover;
    margin-right: 0px;
}\n\n`
};

const main_6 = {
    html: `<div class="main-6">
    <div class="main-sidebar-6"></div>
    <div class="main-content-6">
        <div class="main-image-6"></div>
        <h1 class="main-title-6">- Main Title Text -</h1>
        <h1 class="main-text-6">- Main Text -</h1>
    </div>
</div>\n\n`,
    css: `\n\n`,
    responsive_css: `\n\n`
};

const footer_1 = {
    html: `<div class="footer-1">
    <div class="footer-container-1">
        <h1 class="footer-title-1">- Title -</h1>
    </div>
    <div class="footer-container-1">
        <a class="footer-link-1" href="#">- Link -</a>
        <a class="footer-link-1" href="#">- Link -</a>
        <a class="footer-link-1" href="#">- Link -</a>
    </div>
    <div class="footer-container-1">
        <a class="footer-link-1" href="#">- Link -</a>
        <a class="footer-link-1" href="#">- Link -</a>
        <a class="footer-link-1" href="#">- Link -</a>
    </div>
</div>`,
    css: `.footer-1 {
    display: flex;
    flex-direction: row;
    font-family: "Courier New", Courier, monospace;
    width: 100%;
    min-height: 200px;
    height: fit-content;
    background-color: rgb(226, 226, 226);
    align-items: center;
    align-content: center;
    justify-content: center;
}

.footer-container-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;
}

.footer-link-1 {
    margin: 7px;
    text-decoration: none;
    color: rgb(41, 41, 41);
    font-size: 14px;
    transition: all 0.4s ease;
}

.footer-link-1:hover {
    font-size: 17px;
}`,
    responsive_css: `.footer-1 {
    display: flex;
    flex-direction: column;
    font-family: "Courier New", Courier, monospace;
    width: 100%;
    min-height: 200px;
    height: fit-content;
    background-color: rgb(226, 226, 226);
    align-items: center;
    align-content: center;
    justify-content: center;
}
.footer-container-1 {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    align-content: center;
    justify-content: center;
}`
};