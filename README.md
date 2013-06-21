nicepie
=======

A jQuery plugin which makes pie drawing + animating easy as a pie

## Installation

Include the script after the jQuery library:

    <script src="/path/to/jquery.nicepie.min.js"></script>
    
## Usage

In your HTML document insert a div

    <div id="my_pie"></div>

Then use nicepie:

    $('#my_pie").nicepie(options);

##Options

<table cellpadding="10">
    <tr>
        <th>name</th>
        <th>type</th>
        <th>explaination</th>
        <th>default value</th>
    </tr>
    <tr>
        <td>radius</td>
        <td>integer</td>
        <td>radius of the pie (half the width/height of canvas</td>
        <td>100</td>
    </tr>
    <tr>
        <td>backcolor</td>
        <td>color</td>
        <td>color of the background circle</td>
        <td>#000</td>
    </tr>
    <tr>
        <td>piecolor</td>
        <td>color</td>
        <td>color or the foreground arc, if drawn</td>
        <td>#666</td>
    </tr>
    <tr>
        <td>fontcolor</td>
        <td>color</td>
        <td>text color</td>
        <td>#fff</td>
    </tr>
    <tr>
        <td>font</td>
        <td>font</td>
        <td>font of the drawn text</td>
        <td>20pt Ubuntu italic</td>
    </tr>
    <tr>
        <td>halign</td>
        <td>center | left | right</td>
        <td>horizontal text alignment</td>
        <td>center</td>
    </tr>
    <tr>
        <td>valign</td>
        <td>middle | top | bottom</td>
        <td>vertical text alignment</td>
        <td>middle</td>
    </tr>
    <tr>
        <td>suffix</td>
        <td>string</td>
        <td>string to add at the end of text</td>
        <td></td>
    </tr>
    <tr>
        <td>show_percent</td>
        <td>boolean</td>
        <td>if true, a foreground arc will be drawn.<br />
        <small>start value must be 100, end value between 100 and 0</small></td>
        <td>true</td>
    </tr>
    <tr>
        <td>start</td>
        <td>integer</td>
        <td>starting number value</small>
        <td>100</td>
    </tr>
    <tr>
        <td>end</td>
        <td>integer</td>
        <td>ending number value</td>
        <td>43</td>
    </tr>
    <tr>
        <td>step</td>
        <td>integer</td>
        <td>increase / decrease step</td>
        <td>-1</td>
    </tr>
    <tr>
        <td>interval</td>
        <td>integer</td>
        <td>animation interval in ms</td>
        <td>10</td>
    </tr>
</table>

## License

Licensed under the [MIT License](http://www.opensource.org/licenses/mit-license.php) license.
