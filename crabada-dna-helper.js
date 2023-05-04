var BN = BigNumber
var ALL_CLASS_ID=[1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,16 ,17 ,18 ,19 ,20 ,21 ,22 ,23 ,31 ,32 ,33 ,34 ,35 ,36 ,37 ,38 ,46 ,47 ,48 ,49 ,50 ,51 ,52 ,53 ,61 ,62 ,63 ,64 ,65 ,66 ,67 ,68 ,76 ,77 ,78 ,79 ,80 ,81 ,82 ,83 ,91 ,92 ,93 ,94 ,95 ,96 ,97 ,98 ,106 ,107 ,108 ,109 ,110 ,111 ,112 ,113 ];

var FACTIONS_AND_CLASSES = {
    'ABYSS':['RUINED'],
    'FEARIE':['ORGANIC'],
    'LUX':['PRIME', 'GEM'],
    'MACHINE':['CRABOID'],
    'ORE':['SURGE', 'BULK'],
    'TRENCH':['SUNKEN'],
}
var BG_COLOR = {
    SURGE: "rgb(252, 113, 44)",
    PRIME: "rgb(247, 207, 65)",
    CRABOID: "rgb(86, 168, 200)",
    GEM: "rgb(210, 95, 168)",
    SUNKEN: "rgb(18, 50, 19)",
    BULK: "rgb(121, 57, 26)",
    RUINED: "rgb(138, 134, 131)",
    ORGANIC: "rgb(136, 167, 77)",
  };

  // subclass (breeding type) - factions - class  - type
  var CRAB_INFO = {
    1: ["Emeraldo", "ORE", "SURGE", "TANK"],
    2: ["Crazor", "ORE", "SURGE", "TANK"],
    3: ["Vocrano", "ORE", "SURGE", "TANK"],
    4: ["Spikey", "ORE", "SURGE", "TANK"],
    5: ["Frozo", "ORE", "SURGE", "TANK"],
    6: ["Cratos", "ORE", "SURGE", "TANK"],
    7: ["Rubie", "ORE", "SURGE", "TANK"],
    8: ["Amida", "ORE", "SURGE", "TANK"],
    16: ["Staro", "TRENCH", "SUNKEN", "SUPPORT"],
    17: ["Craken", "TRENCH", "SUNKEN", "SUPPORT"],
    18: ["Crobster", "TRENCH", "SUNKEN", "SUPPORT"],
    19: ["Cralmon", "TRENCH", "SUNKEN", "SUPPORT"],
    20: ["Creasure", "TRENCH", "SUNKEN", "SUPPORT"],
    21: ["Crucket", "TRENCH", "SUNKEN", "SUPPORT"],
    22: ["Crele", "TRENCH", "SUNKEN", "SUPPORT"],
    23: ["Crotopus", "TRENCH", "SUNKEN", "SUPPORT"],
    31: ["Bitcoin", "LUX", "PRIME", "DAMAGE"],
    32: ["Cardano", "LUX", "PRIME", "DAMAGE"],
    33: ["Near", "LUX", "PRIME", "DAMAGE"],
    34: ["Ether", "LUX", "PRIME", "DAMAGE"],
    35: ["Cz", "LUX", "PRIME", "DAMAGE"],
    36: ["Fantom", "LUX", "PRIME", "DAMAGE"],
    37: ["Avalanche", "LUX", "PRIME", "DAMAGE"],
    38: ["Solana", "LUX", "PRIME", "DAMAGE"],
    46: ["Cragma", "ORE", "BULK", "TANK"],
    47: ["C-Rex", "ORE", "BULK", "TANK"],
    48: ["Charoite", "ORE", "BULK", "TANK"],
    49: ["Rocco", "ORE", "BULK", "TANK"],
    50: ["Chief", "ORE", "BULK", "TANK"],
    51: ["Cropion", "ORE", "BULK", "TANK"],
    52: ["Crazurite", "ORE", "BULK", "TANK"],
    53: ["Crava", "ORE", "BULK", "TANK"],
    61: ["Twinner", "MACHINE", "CRABOID", "DAMAGE"],
    62: ["Onepunch", "MACHINE", "CRABOID", "DAMAGE"],
    63: ["Cropter", "MACHINE", "CRABOID", "DAMAGE"],
    64: ["Plasma", "MACHINE", "CRABOID", "DAMAGE"],
    65: ["Lasery", "MACHINE", "CRABOID", "DAMAGE"],
    66: ["Redeye", "MACHINE", "CRABOID", "DAMAGE"],
    67: ["Crocket", "MACHINE", "CRABOID", "DAMAGE"],
    68: ["Gear", "MACHINE", "CRABOID", "DAMAGE"],
    76: ["Skul", "ABYSS", "RUINED", "DAMAGE"],
    77: ["Cragon", "ABYSS", "RUINED", "DAMAGE"],
    78: ["Crombie", "ABYSS", "RUINED", "DAMAGE"],
    79: ["Deadeye", "ABYSS", "RUINED", "DAMAGE"],
    80: ["Cranosis", "ABYSS", "RUINED", "DAMAGE"],
    81: ["Crailer", "ABYSS", "RUINED", "DAMAGE"],
    82: ["Camun-Ra", "ABYSS", "RUINED", "DAMAGE"],
    83: ["Crauldron", "ABYSS", "RUINED", "DAMAGE"],
    91: ["Pearlio", "LUX", "GEM", "TANK"],
    92: ["Lapidari", "LUX", "GEM", "TANK"],
    93: ["Paraiba", "LUX", "GEM", "TANK"],
    94: ["Cramethyst", "LUX", "GEM", "TANK"],
    95: ["Cranet", "LUX", "GEM", "TANK"],
    96: ["Croyo", "LUX", "GEM", "TANK"],
    97: ["Earl Cray", "LUX", "GEM", "TANK"],
    98: ["Magnifiso", "LUX", "GEM", "TANK"],
    106: ["Natura", "FEARIE", "ORGANIC", "SUPPORT"],
    107: ["Freshie", "FEARIE", "ORGANIC", "SUPPORT"],
    108: ["Adam", "FEARIE", "ORGANIC", "SUPPORT"],
    109: ["Eva ", "FEARIE", "ORGANIC", "SUPPORT"],
    110: ["Bulbie", "FEARIE", "ORGANIC", "SUPPORT"],
    111: ["Celon", "FEARIE", "ORGANIC", "SUPPORT"],
    112: ["Cranana", "FEARIE", "ORGANIC", "SUPPORT"],
    113: ["Crawberry", "FEARIE", "ORGANIC", "SUPPORT"],
    1001: ["Fire Spirit", "", "SURGE", "TANK"],
    1002: ["Ocean Spirit", "", "SUNKEN", "SUPPORT"],
    1003: ["Satoshi Spirit", "", "PRIME", "DAMAGE"],
    1004: ["Earth Spirit", "", "BULK", "TANK"],
    1005: ["Astray Spirit", "", "CRABOID", "TANK"],
    1006: ["Lantern Spirit", "", "RUINED", "DAMAGE"],
    1007: ["Light Spirit", "", "GEM", "TANK"],
    1008: ["Lotus Spirit", "", "ORGANIC", "SUPPORT"],
  };
  
var STAT_BONUS_PERCENT = [0, 200, 400, 600, 800, 1000, 1500];
var LEGEND_STAT_BONUS_PERCENT = [500, 1000];
var PERCENT_BASE = 10000;

var STAT_INFO = {
    baseStats: {
        hp: [128,114,108,125,109,110,121,120],
        damage:[44,50,58,47,56,54,48,48],
        armor:[28,25,22,26,23,24,27,24],
        speed:[22,29,25,23,27,26,24,29],
        critical:[33,37,42,34,40,41,35,34],
    },
    parts:{
        horn:[3,3,1,4,2,2,5,2],
        pincer:[0,2,4,0,3,5,1,2],
        shell:[5,1,0,5,0,0,4,2],
        body:[1,4,1,1,0,0,0,2],
        mouth:[1,0,4,0,5,3,0,2],
    }
}


function createStatInfo(GAME_STATS_INFO) {
    var rs={
        baseStats: {
            hp: [],
            damage:[],
            armor:[],
            speed:[],
            critical:[],
        },
        parts:{
            horn:[],
            pincer:[],
            shell:[],
            body:[],
            mouth:[],
        }
    }
    var CLASS_AMOUNT = 8;
    var SUBCLASS_IN_CLASS = 15;


    for(var i = 0; i < CLASS_AMOUNT; i++) {
        for (var j =0; j < SUBCLASS_IN_CLASS; j++) {
            rs.baseStats.hp.push(GAME_STATS_INFO.baseStats.hp[i]);
            rs.baseStats.damage.push(GAME_STATS_INFO.baseStats.damage[i]);
            rs.baseStats.armor.push(GAME_STATS_INFO.baseStats.armor[i]);
            rs.baseStats.speed.push(GAME_STATS_INFO.baseStats.speed[i]);
            rs.baseStats.critical.push(GAME_STATS_INFO.baseStats.critical[i]);
            
            rs.parts.horn.push(GAME_STATS_INFO.parts.horn[i]);
            rs.parts.pincer.push(GAME_STATS_INFO.parts.pincer[i]);
            rs.parts.shell.push(GAME_STATS_INFO.parts.shell[i]);
            rs.parts.body.push(GAME_STATS_INFO.parts.body[i]);
            rs.parts.mouth.push(GAME_STATS_INFO.parts.mouth[i]);
        }
    }
    return rs;
}
var STATS = createStatInfo(STAT_INFO);

function extractDNA(hexDNA) {
    hexDNA = hexClean(hexDNA);
    var attrName = [
        'crabaType',
        'crabaClass',

        'legend_shell',
        'legend_horn',
        'legend_body',
        'legend_mouth',
        'legend_eyes',
        'legend_pincers',

        'reserve1',
        'reserve2',
        'reserve3',
        'reserve4',
        'reserve5',
        'reserve6',

        'shell1',
        'shell2',
        'shell3',
        'horn1',
        'horn2',
        'horn3',

        'body1',
        'body2',
        'body3',
        'mouth1',
        'mouth2',
        'mouth3',
        'eyes1',
        'eyes2',
        'eyes3',
        'pincers1',
        'pincers2',
        'pincers3',
    ];

    var rs = {}

    for (var i = 0; i < attrName.length; i++) {
        var nibble = toNibble(hexDNA.substr(i*2, 2))
        rs[attrName[i]] = new BN(nibble,16).toString();
    }
    return rs;
}

function toNibble(num) {
    var bn = num
    if (typeof num == 'string') {
        bn = new BN(num, 16);
    } 

    var rs = bn.toString(16);
    if (rs.length < 2) {
        rs = '0'+rs;
    }
    return rs;
}

function combineDNA(dna) {
    var rs = ''
    for(var i =0; i < dna.length; i++) {
        rs = rs + toNibble(dna[i]);
    }
    
    var bn = new BigNumber(rs, 16);
    return bn;

}

function hexClean(hexString) {
    if (hexString.startsWith('0x')) {
        return hexString.substr(2);
    }

    var len = 64-hexString.length;
    var zeroPad = "0".repeat(len);
    return zeroPad+hexString;
}


function purityCount(parsedDNA) {
    var props = [
        'shell1',
        'shell2',
        'shell3',
        'horn1',
        'horn2',
        'horn3',
        'body1',
        'body2',
        'body3',
        'mouth1',
        'mouth2',
        'mouth3',
        'eyes1',
        'eyes2',
        'eyes3',
        'pincers1',
        'pincers2',
        'pincers3']
        var subCount = 0;
        var bigCount = 0;
        var pureCount = 0;
        var crabBigClass = Math.floor((parsedDNA.crabaClass-1)/15)+1;
        for (var i = 0; i < props.length; i++) {
            var subClass = parsedDNA[props[i]];
            var bigClass = Math.floor((subClass-1)/15)+1;
            if (parsedDNA.crabaClass == subClass) {
                subCount++;
            }
            if (crabBigClass == bigClass) {
                bigCount++;
            }
            if (props[i].endsWith('1') && bigClass == crabBigClass) {
                pureCount++;
            }
        }
        return {subCount, bigCount, pureCount};
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function generateRandomDNA() {
    var dna = [1,0,0,0,0,0,0,0,0,0,0,0,0,0];
    var max = ALL_CLASS_ID.length - 1;

    var classIdIndex = randomInteger(0,max);
    dna[1] = ALL_CLASS_ID[classIdIndex];

    for(var i = 0; i < 18; i++) {
        var idx = randomInteger(0,max);
        dna.push(ALL_CLASS_ID[idx])
    }

    return combineDNA(dna);
}

function getStats(hexDNA) {
    var dna = extractDNA(hexDNA);

        var [damage, crit, speed, hp, armour] = calculateStats(dna);

        // Legend parts
        var [samePartCountLegend,  diffPartCountLegend] = countLengendParts(dna);
        if (samePartCountLegend + diffPartCountLegend > 0) {
            hp = calculateLegendBonusStat(hp, samePartCountLegend, diffPartCountLegend);
            speed = calculateLegendBonusStat(speed, samePartCountLegend, diffPartCountLegend);
            armour = calculateLegendBonusStat(armour, samePartCountLegend, diffPartCountLegend);
            damage = calculateLegendBonusStat(damage, samePartCountLegend, diffPartCountLegend);
            crit = calculateLegendBonusStat(crit, samePartCountLegend, diffPartCountLegend);
        }
    return [damage, crit, speed, hp, armour];
}

function calculateStats(dna) {
    var CLASS_DIVIDER = 15;
    var subClass = dna.crabaClass
    var [pincer, eyes, mouth,body,horn,shell] = [dna.pincers1, dna.eyes1, dna.mouth1, dna.body1, dna.horn1, dna.shell1];

        
        var crabClass = Math.floor((subClass - 1) /CLASS_DIVIDER + 1);

        var sameClass = [];
        var samePartCount = 0;

        if(Math.floor((pincer-1)/CLASS_DIVIDER + 1)  == crabClass) {
            samePartCount++;
            sameClass[0]=1;
        }
        if(Math.floor((eyes-1)/CLASS_DIVIDER + 1) == crabClass) {
            samePartCount++;
            sameClass[1]=1;
        }

        if(Math.floor((mouth-1)/CLASS_DIVIDER + 1) == crabClass) {
            samePartCount++;
            sameClass[2]=1;
        }
        if(Math.floor((body-1)/CLASS_DIVIDER + 1) == crabClass) {
            samePartCount++;
            sameClass[3]=1;
        }
        if(Math.floor((horn-1)/CLASS_DIVIDER + 1) == crabClass) {
            samePartCount++;
            sameClass[4]=1;
        }
        if(Math.floor((shell-1)/CLASS_DIVIDER + 1) == crabClass) {
            samePartCount++;
            sameClass[5]=1;
        }

        var partClass = [];
        partClass[0] = pincer;
        partClass[1] = mouth;
        partClass[2] = body;
        partClass[3] = horn;
        partClass[4] = shell;

        return calculateBonusStat(sameClass, samePartCount, subClass, partClass);
}


function calculateBonusStat(sameClass, samePartCount, subClass,  partClass){
    var bonusPercent = STAT_BONUS_PERCENT[samePartCount];

    damage = (STATS.baseStats.damage[subClass] + STATS.parts.pincer[partClass[0]]);
    crit = (STATS.baseStats.critical[subClass] + STATS.parts.mouth[partClass[1]]);
    speed = (STATS.baseStats.speed[subClass] + STATS.parts.body[partClass[2]]);
    hp = (STATS.baseStats.hp[subClass] + STATS.parts.horn[partClass[3]]);
    armour = (STATS.baseStats.armor[subClass] + STATS.parts.shell[partClass[4]]);

    if (sameClass[0] == 1) {
        damage = Math.floor(damage * (PERCENT_BASE+bonusPercent) / PERCENT_BASE);
    }
    if (sameClass[2] == 1) {
        crit = Math.floor(crit * (PERCENT_BASE+bonusPercent) / PERCENT_BASE);
    }
    if (sameClass[3] == 1) {
        speed = Math.floor(speed * (PERCENT_BASE+bonusPercent) / PERCENT_BASE);
    }
    if (sameClass[4] == 1) {
        hp = Math.floor(hp * (PERCENT_BASE+bonusPercent) / PERCENT_BASE);
    }
    if (sameClass[5] == 1) {
        armour = Math.floor(armour * (PERCENT_BASE+bonusPercent) / PERCENT_BASE);
    }

    return [damage, crit, speed, hp, armour];
}


function countLengendParts(dna) {
     var [s1,  s2,  s3,  s4,  s5,  s6] = [
        dna['legend_shell'],
        dna['legend_horn'],
        dna['legend_body'],
        dna['legend_mouth'],
        dna['legend_eyes'],
        dna['legend_pincers'],
    ];

    var CLASS_DIVIDER = 15;
    var subClass = dna.crabaClass
    var crabClass = Math.floor((subClass - 1) /CLASS_DIVIDER + 1);

    var lengendPartCount = (s1>0?1:0) + (s2>0?1:0) + (s3>0?1:0) + (s4>0?1:0) + (s5>0?1:0) + (s6>0?1:0);
    samePartCount = 0;
    samePartCount += s1==crabClass?1:0;
    samePartCount += s2==crabClass?1:0;
    samePartCount += s3==crabClass?1:0;
    samePartCount += s4==crabClass?1:0;
    samePartCount += s5==crabClass?1:0;
    samePartCount += s6==crabClass?1:0;

    diffPartCount = lengendPartCount- samePartCount;
    return [samePartCount,  diffPartCount];
}

function calculateLegendBonusStat( stat,  samePartCountLegend,  diffPartCountLegend) {
    var extraPercent = samePartCountLegend*LEGEND_STAT_BONUS_PERCENT[1] + diffPartCountLegend*LEGEND_STAT_BONUS_PERCENT[0];
    var legendStat = Math.floor(stat * (extraPercent+PERCENT_BASE) /PERCENT_BASE);
    return legendStat;
}


var stats = getStats('15F0404000000000000000000005F5F5F6161615C61615B5B5E5F5F5F5C5B5C');
console.log(stats);

// 906392544231311161076231617881117286073401978432969551146651717139041419521 
// hp	150
// speed	26
// damage	50
// critical	39
// armor	37


// 1260000000000000000000000001F241F2325252222221F1F1F1F1F1F212321
// hp	125
// speed	29
// damage	71
// critical	52
// armor	25


//14405050000000000000000000041403E403D404441444141413F3E40424342

// 15F0404000000000000000000005F5F5F6161615C61615B5B5E5F5F5F5C5B5C