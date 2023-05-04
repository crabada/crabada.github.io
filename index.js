function showPhoto(parsedDNA, targetElementId) {
    var shellId = parsedDNA.legend_shell>0?`100${parsedDNA.legend_shell}`:parsedDNA.shell1
    var hornId = parsedDNA.legend_horn>0?`100${parsedDNA.legend_horn}`:parsedDNA.horn1
    var bodyId = parsedDNA.legend_body>0?`100${parsedDNA.legend_body}`:parsedDNA.body1
    var mouthId = parsedDNA.legend_mouth>0?`100${parsedDNA.legend_mouth}`:parsedDNA.mouth1
    var eyesId = parsedDNA.legend_eyes>0?`100${parsedDNA.legend_eyes}`:parsedDNA.eyes1
    var pincersId = parsedDNA.legend_pincers>0?`100${parsedDNA.legend_pincers}`:parsedDNA.pincers1
    
    try {
        mergeImages([
            `./images/crab-parts/shell/shell_${shellId}.png`,
            `./images/crab-parts/horn/horn_${hornId}.png`,
                `./images/crab-parts/body/body_${bodyId}.png`,
                `./images/crab-parts/mouth/mouth_${mouthId}.png`,
                `./images/crab-parts/eye/eye_${eyesId}.png`,
                `./images/crab-parts/pincer/pincer_${pincersId}.png`,
            ]
             )
        .then((b64)=>{
            document.getElementById(targetElementId).src = b64;
        });
    } catch (e) {
        console.log(e);
    }
}

function showPhotoByDNA(hexDNA, targetElementId) {
    var dnaInfo = extractDNA(hexDNA);
    showPhoto(dnaInfo, targetElementId);
}

function showDetail(parsedDNA) {
    var dnaTable = `
            <tr>
                <td>Dominant</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.shell1][2]]}">${CRAB_INFO[parsedDNA.shell1][0]} <div>${generateLegendEl(parsedDNA.legend_shell)}</div></td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.horn1][2]]}">${CRAB_INFO[parsedDNA.horn1][0]} <div>${generateLegendEl(parsedDNA.legend_horn)}</div></td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.body1][2]]}">${CRAB_INFO[parsedDNA.body1][0]} <div>${generateLegendEl(parsedDNA.legend_body)}</div></td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.eyes1][2]]}">${CRAB_INFO[parsedDNA.eyes1][0]} <div>${generateLegendEl(parsedDNA.legend_eyes)}</div></td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.mouth1][2]]}">${CRAB_INFO[parsedDNA.mouth1][0]} <div>${generateLegendEl(parsedDNA.legend_mouth)}</div></td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.pincers1][2]]}">${CRAB_INFO[parsedDNA.pincers1][0]} <div>${generateLegendEl(parsedDNA.legend_pincers)}</div></td>
            </tr>
            <tr>
                <td>Recessive1</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.shell2][2]]}">${CRAB_INFO[parsedDNA.shell2][0]} </td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.horn2][2]]}">${CRAB_INFO[parsedDNA.horn2][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.body2][2]]}">${CRAB_INFO[parsedDNA.body2][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.eyes2][2]]}">${CRAB_INFO[parsedDNA.eyes2][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.mouth2][2]]}">${CRAB_INFO[parsedDNA.mouth2][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.pincers2][2]]}">${CRAB_INFO[parsedDNA.pincers2][0]}</td>
            </tr>
            <tr>
            <td>Recessive2</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.shell3][2]]}">${CRAB_INFO[parsedDNA.shell3][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.horn3][2]]}">${CRAB_INFO[parsedDNA.horn3][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.body3][2]]}">${CRAB_INFO[parsedDNA.body3][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.eyes3][2]]}">${CRAB_INFO[parsedDNA.eyes3][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.mouth3][2]]}">${CRAB_INFO[parsedDNA.mouth3][0]}</td>
                <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.pincers3][2]]}">${CRAB_INFO[parsedDNA.pincers3][0]}</td>
            </tr>
            `


        var purity = purityCount(parsedDNA);

        var overview = `
            <tr>
            <td>Type:</td>
            <td >${parsedDNA.crabaType==1?"Normal":"Genesis"}</td>
            </tr>
            <tr>
            <td>Class:</td>
            <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.crabaClass][2]]}">${CRAB_INFO[parsedDNA.crabaClass][2]} (${purity.bigCount}/18)</td>
            </tr>
            <tr>
            <td>Breed type:</td>
            <td style="color:white;background-color:${BG_COLOR[CRAB_INFO[parsedDNA.crabaClass][2]]}">${CRAB_INFO[parsedDNA.crabaClass][0]} (${purity.subCount}/18)</td>
                        </tr>
            <tr>
                <td>Purity:</td>
                <td>${purity.pureCount}/6</td>
            </tr>
        `;

        return {dnaTable, overview}
    }

    function generateLegendEl(legendId) {
        if(legendId<=0) return '';
        var id = '100'+legendId;

        return `<i style="font-size:12px; color:white;background-color:${BG_COLOR[CRAB_INFO[legendId][2]]}">
        (Legend ${CRAB_INFO[id][2]})
        </i>`
    }