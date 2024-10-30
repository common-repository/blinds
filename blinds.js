
    var doc = document.createElement('style');
    doc.setAttribute('type', 'text/css');
    doc.setAttribute('id', 'osd_generated');
    change_theme_mode();
    document.head.appendChild(doc);

window.onload = function()
{
    widget_display();
    widget_click();
}

/**
 * This function toggles the color scheme between original and dark mode.
 * Also toggles the widget between normal mode and dark mode.
 * @returns void
 */
function widget_click()
{
    var widget = document.getElementById('osd_blinds_widget_id');
    widget.onclick = function()
    {
        if (osd_blinds_cookie_get()==0 || osd_blinds_cookie_get()==null) {
            osd_blinds_cookie_set();
            change_theme_mode();
            widget_display();
            return;
        }
        if (osd_blinds_cookie_get()=='osd_blinds_cookieMTU5NjM4MTU0OTI0Ng') {
            osd_blinds_cookie_unset();
            change_theme_mode();
            widget_display();
            return;
        }
    }
}

/**
 * Changes the color scheme between normal and dark modes.
 * @returns string
 */
function change_theme_mode() {
    var stylesheet = '\
        @media screen {\
        body, body div,\
        textarea, select,\
        select option,\
        input[type="checkbox"],\
        input[type="radio"],\
        span[role="textbox"],\
        span[role="combobox"],\
        input[type="search"],\
        input[type="number"],\
        input[type="text"],\
        input[type="email"],\
        input[type="tel"],\
        input[type="year"],\
        input[type="month"],\
        input[type="week"],\
        input[type="datetime-local"],\
        input[type="date"],\
        input[type="url"],\
        input[type="password"] {\
            background-color: #000000 !important;\
            color: #a0a0a0 !important;\
        }\
        \
        header, header div,\
        main, main div, ins, del,\
        table, th, tr, td, table div, table p,\
        article, article div,\
        aside, aside div, form,\
        footer, footer div,\
        h1, h2, h3, h4, h5, h6,\
        section, p, p div, ul li,\
        .price, .add_to_cart_button {\
            background-color: #0a0a0a !important;\
            color: #a0a0a0 !important;\
        }\
        \
        aside h1,\
        aside h2,\
        aside h3,\
        aside h4,\
        aside h5,\
        aside h6 {\
            color: #a0a0a0 !important;\
        }\
        \
        #osd_blinds_widget_id {\
            background: none !important;\
        }\
        \
        button, .btn {\
            background-color: #000000 !important;\
            color: currentColor !important;\
        }\
    }\
    @media print {\
        #osd_blinds_widget_id {\
            display: none !important;\
        }\
    }\
    ';

    if (osd_blinds_cookie_get()==0 || osd_blinds_cookie_get()==null) {
        doc.textContent =
        `
        /*style*/
        @media print {
            #osd_blinds_widget_id {
                display: none !important;
            }
        }
        `;
        return;
    }
    if (osd_blinds_cookie_get()=='osd_blinds_cookieMTU5NjM4MTU0OTI0Ng') {
        doc.textContent = stylesheet;
        return;
    }
}

/**
 * The sun SVG.
 * @returns void
 */
function set_to_sun()
{
    var widget = document.getElementById('osd_blinds_widget_id');
    widget.innerHTML = '<a title="Switch to Normal Mode"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="#a0a0a0" stroke="#a0a0a0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor:pointer;" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg></a>';
    return;
}

/**
 * The moon SVG.
 * @returns void
 */
function set_to_moon()
{
    var widget = document.getElementById('osd_blinds_widget_id');
    widget.innerHTML = '<a title="Switch to Dark Mode"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="cursor:pointer;" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg></a>';
    return;
}

/**
 * Displays the widget.
 * @returns void
 */
function widget_display()
{
    if (osd_blinds_cookie_get()==0 || osd_blinds_cookie_get()==null) {
        set_to_moon();
        return;
    }

    if (osd_blinds_cookie_get()=='osd_blinds_cookieMTU5NjM4MTU0OTI0Ng') {
        set_to_sun();
        return;
    }
}

/**
 * Sets the cookie!
 * @returns void
 */
function osd_blinds_cookie_set()
{
    document.cookie = "osd_blinds_cookie=osd_blinds_cookieMTU5NjM4MTU0OTI0Ng; path=/;";
    return;
}

/**
 * Checks for the plugin's cookie existence.
 * @param {*} cookie_name
 * @returns string if cookie exists, null if it doesn't.
 */
function osd_blinds_cookie_get(cookie_name='osd_blinds_cookie')
{
    var name = cookie_name + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
  return null;
}

/**
 * Deletes the plugin's cookie, if it is set.
 * @returns void
 */
function osd_blinds_cookie_unset()
{
    document.cookie = "osd_blinds_cookie=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
    return;
}
