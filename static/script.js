/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/build.ts":
/*!******************************!*\
  !*** ./src/scripts/build.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bg: () => (/* binding */ bg),
/* harmony export */   guideContainer: () => (/* binding */ guideContainer),
/* harmony export */   mainContainer: () => (/* binding */ mainContainer)
/* harmony export */ });
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guide */ "./src/scripts/guide.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/scripts/data.ts");


function imageAndLabel(cell, row, gear, hoverLabel) {
  cell = row.insertCell();
  cell.classList.add('pos-rel');
  var pic = document.createElement('div');
  pic.classList.add('pic', gear.acr);
  cell.appendChild(pic);
  if (gear.acr !== 'hawp') {
    var label = document.createElement('label');
    label.classList.add('tooltip', 'flex', 'fh-center', 'pos-abs');
    var input = document.createElement('input');
    input.classList.add('pos-abs');
    input.setAttribute('type', 'checkbox');
    var span = document.createElement('span');
    span.classList.add('pos-abs');
    span.textContent = gear.name;
    // for support valk images
    if (hoverLabel) {
      cell.classList.add('supp-pic');
      var acr = document.createElement('p');
      acr.textContent = gear.acr.toUpperCase();
      label.appendChild(acr);
    }
    label.appendChild(input);
    label.appendChild(span);
    cell.appendChild(label);
  }
  return cell;
}
function getIndex(str) {
  for (var i = 0; i < _data__WEBPACK_IMPORTED_MODULE_1__.buffs.length; i++) {
    for (var j = 0; j < _data__WEBPACK_IMPORTED_MODULE_1__.buffs[i].length; j++) {
      if (_data__WEBPACK_IMPORTED_MODULE_1__.buffs[i][j] === str) {
        return i;
      }
    }
  }
  return -1;
}
var mainContainer = document.querySelector('#main-container');
var guideContainer = document.querySelector('#guide-container');
var bg = document.querySelector('#bg');
var title = document.querySelector('header h1');
// setup classes
var buttonClasses = ['banner', 'pos-rel', 'hidden'];
var bannerClasses = [];
var mainNameDivClasses = ['main-name', 'flex', 'fh-center', 'fv-center', 'pos-abs'];
var mainNameClasses = ['vertical-text'];
var device = '';
if (_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
  title.style.fontSize = '4.5em';
  mainContainer.classList.add('f-col');
  mainContainer.style.overflowX = 'hidden';
  buttonClasses.push('overflow-hide');
  device = 'mb';
} else {
  device = 'dt';
}
bg.classList.add("bg-".concat(device));
mainContainer.classList.add(device);
bannerClasses.push(device, "".concat(device, "-pos"));
mainNameClasses.push(device);

// DOM generation start
var _loop = function _loop(i) {
  var _button$classList, _banner$classList, _mainNameDiv$classLis, _mainName$classList;
  // banners start
  var button = document.createElement('button');
  button.setAttribute('type', 'button');
  (_button$classList = button.classList).add.apply(_button$classList, buttonClasses);
  var banner = document.createElement('div');
  banner.setAttribute('id', "".concat(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].acr, "-").concat(device));
  (_banner$classList = banner.classList).add.apply(_banner$classList, bannerClasses);
  var mainNameDiv = document.createElement('div');
  (_mainNameDiv$classLis = mainNameDiv.classList).add.apply(_mainNameDiv$classLis, mainNameDivClasses.concat(["-".concat(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].acr, "-")]));
  var mainName = document.createElement('span');
  (_mainName$classList = mainName.classList).add.apply(_mainName$classList, mainNameClasses.concat(["-".concat(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].acr, "-")]));
  mainName.textContent = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].name.replace(/[^a-zA-Z0-9- ]/g, '');
  mainNameDiv.appendChild(mainName);
  button.appendChild(banner);
  button.appendChild(mainNameDiv);
  mainContainer.appendChild(button);
  // banners end

  // guides start
  var guideContent = document.createElement('div');
  guideContent.classList.add('guide-content', 'flex', 'fv-center', 'f-col', device, 'no-display');

  // ribbon
  var version = document.createElement('div');
  version.textContent = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].version;
  version.classList.add('pos-abs', 'ribbon');
  guideContent.appendChild(version);
  if (!_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
    // inner name
    var innerName = document.createElement('h2');
    innerName.textContent = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].name;
    guideContent.appendChild(innerName);
  }

  // iterate through builds
  var _loop2 = function _loop2(j) {
    var signetTypes = Object.keys(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signetTable);
    var signetTypesWithoutExclusive = signetTypes.slice(1);
    // build name
    if (Object.keys(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds).length > 1) {
      var buildNo = document.createElement('p');
      buildNo.classList.add('build-no');
      buildNo.textContent = "Build: ".concat(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].name);
      guideContent.appendChild(buildNo);
    }
    // signets images
    var recSignets = document.createElement('div');
    recSignets.classList.add('rec-signets', 'flex', 'f-row');
    signetTypesWithoutExclusive.forEach(function (signetType) {
      for (var k = 0; k < _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signet[signetType].length; k++) {
        var recSignetDiv = document.createElement('div');
        recSignetDiv.classList.add('signet', 'sig-tog', 'flex', 'fh-center', 'fv-center', _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signet[signetType][k][0].name.toLowerCase());
        recSignets.appendChild(recSignetDiv);
      }
    });
    guideContent.appendChild(recSignets);
    // anchors start
    var anchorContainer = document.createElement('div');
    anchorContainer.classList.add('flex', 'f-row');
    var anchorSymbol = document.createElement('span');
    anchorSymbol.classList.add('material-symbols-outlined', 'flex', 'fv-center');
    anchorSymbol.textContent = 'anchor';
    anchorContainer.appendChild(anchorSymbol);
    var hasNotes = ('notes' in _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j]);
    var anchorTypes = [].concat(signetTypes);
    if (hasNotes) anchorTypes.push('notes');
    anchorTypes.forEach(function (anchorType) {
      var anchorDiv = document.createElement('div');
      anchorDiv.classList.add('anchor', 'flex', 'fh-center', 'fv-center', 'pos-rel');
      anchorDiv.textContent = anchorType.charAt(0).toUpperCase();
      var anchor = document.createElement('a');
      anchor.setAttribute('href', "#".concat(anchorType, "-").concat(i + 1, "-").concat(j + 1));
      var linkSpanner = document.createElement('span');
      linkSpanner.classList.add('link-spanner', 'pos-abs');
      anchor.appendChild(linkSpanner);
      anchorDiv.appendChild(anchor);
      anchorContainer.appendChild(anchorDiv);
    });
    anchorContainer.appendChild(anchorSymbol.cloneNode(true));
    //  anchors end
    guideContent.appendChild(anchorContainer);

    // buffs tables start
    if ('buff' in _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j]) {
      var buffTable = document.createElement('table');
      buffTable.classList.add('buff-tbl');
      // header
      var buffTableHead = buffTable.createTHead();
      var buffTableHeadRow = buffTableHead.insertRow();
      for (var k = 0; k < _data__WEBPACK_IMPORTED_MODULE_1__.buffTableHeaders.length; k++) {
        var buffTableHeader = document.createElement('th');
        buffTableHeader.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.buffTableHeaders[k];
        buffTableHeadRow.appendChild(buffTableHeader);
      }
      buffTableHead.appendChild(buffTableHeadRow);
      // body
      var buffTableBody = buffTable.createTBody();
      for (var _k = 0; _k < _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].buff.length; _k++) {
        // rows
        var buffTableBodyRow = buffTableBody.insertRow();
        var cost = (5 * getIndex(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].buff[_k])).toString();
        for (var l = 0; l < 2; l++) {
          // cells
          var buffTableBodyCell = buffTableBodyRow.insertCell();
          if (l === 0) {
            buffTableBodyCell.textContent = cost;
          } else {
            buffTableBodyCell.textContent = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].buff[_k];
          }
        }
      }
      buffTable.appendChild(buffTableHead);
      buffTable.appendChild(buffTableBody);
      guideContent.appendChild(buffTable);
    }
    // buffs table end

    var emblemSupportDiv = document.createElement('div');
    emblemSupportDiv.classList.add('emblem-support', 'flex', 'f-row');
    // emblem table start
    var emblemTableDiv = document.createElement('div');
    emblemTableDiv.classList.add('emblem', 'flex', 'fh-center');
    var emblemTable = document.createElement('table');
    // header
    var emblemTableHead = emblemTable.createTHead();
    var emblemTableHeadRow = emblemTableHead.insertRow();
    for (var _k2 = 0; _k2 < _data__WEBPACK_IMPORTED_MODULE_1__.emblemTableHeaders.length; _k2++) {
      var emblemTableHeader = document.createElement('th');
      emblemTableHeader.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.emblemTableHeaders[_k2];
      if (_k2 === 1) emblemTableHeader.setAttribute('colspan', '2');
      emblemTableHeadRow.appendChild(emblemTableHeader);
    }
    emblemTableHead.appendChild(emblemTableHeadRow);
    // body
    var emblemTableBody = emblemTable.createTBody();
    for (var _k3 = 0; _k3 < 3; _k3++) {
      // rows
      var emblemTableBodyRow = emblemTableBody.insertRow();
      for (var _l = 0; _l < 2; _l++) {
        // cells
        var emblemTableBodyCell = void 0;
        if (_l === 0) {
          emblemTableBodyCell = emblemTableBodyRow.insertCell();
          emblemTableBodyCell.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.emblemTableTimeColumn[_k3];
        } else {
          for (var m = 0; m < _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].emblem[_k3].length; m++) {
            emblemTableBodyCell = imageAndLabel(emblemTableBodyCell, emblemTableBodyRow, _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].emblem[_k3][m], false);
          }
        }
      }
      emblemTableBody.appendChild(emblemTableBodyRow);
    }
    emblemTable.appendChild(emblemTableHead);
    emblemTable.appendChild(emblemTableBody);
    emblemTableDiv.appendChild(emblemTable);
    emblemSupportDiv.appendChild(emblemTableDiv);
    // emblem table end

    // supports table start
    var supportTableDiv = document.createElement('div');
    supportTableDiv.classList.add('supp', 'flex', 'fh-center');
    var supportTable = document.createElement('table');
    // header
    var supportTableHead = supportTable.createTHead();
    var supportTableHeadRow = supportTableHead.insertRow();
    for (var _k4 = 0; _k4 < _data__WEBPACK_IMPORTED_MODULE_1__.supportTableHeaders.length; _k4++) {
      var supportTableHeader = document.createElement('th');
      supportTableHeader.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.supportTableHeaders[_k4];
      if (_k4 === 1 || _k4 === 2) supportTableHeader.setAttribute('colspan', '2');
      supportTableHeadRow.appendChild(supportTableHeader);
    }
    supportTableHead.appendChild(supportTableHeadRow);
    // body
    var supportTableBody = supportTable.createTBody();
    for (var _k5 = 0; _k5 < 2; _k5++) {
      // rows
      var supportTableBodyRow = supportTableBody.insertRow();
      for (var _l2 = 0; _l2 < 3; _l2++) {
        // cells
        var supportTableBodyCell = void 0;
        if (_l2 === 0) {
          supportTableBodyCell = supportTableBodyRow.insertCell();
          supportTableBodyCell.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.supportTableTypeColumn[_k5];
        } else {
          for (var _m = 0; _m < _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].support[_k5][_l2 - 1].length; _m++) {
            supportTableBodyCell = imageAndLabel(supportTableBodyCell, supportTableBodyRow, _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].support[_k5][_l2 - 1][_m], true);
          }
          if (_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].support[_k5][_l2 - 1].length === 1) {
            supportTableBodyCell.setAttribute('colspan', '2');
          }
        }
      }
      supportTableBody.appendChild(supportTableBodyRow);
    }
    supportTable.appendChild(supportTableHead);
    supportTable.appendChild(supportTableBody);
    supportTableDiv.appendChild(supportTable);
    emblemSupportDiv.appendChild(supportTableDiv);
    // supports table end
    guideContent.appendChild(emblemSupportDiv);

    // gear start
    if ('gear' in _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j]) {
      var stigTitle = document.createElement('h3');
      stigTitle.textContent = 'Recommended Gear';
      guideContent.appendChild(stigTitle);
      var stigTable = document.createElement('table');
      stigTable.classList.add('gear-tbl');
      var stigTableBody = stigTable.createTBody();
      for (var _k6 = 0; _k6 < Object.keys(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].gear).length; _k6++) {
        // rows
        var stigTableBodyRow = stigTableBody.insertRow();
        for (var _l3 = 0; _l3 < _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].gear[_k6].length; _l3++) {
          // cells
          var stigTableBodyCell = void 0;
          stigTableBodyCell = imageAndLabel(stigTableBodyCell, stigTableBodyRow, _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].gear[_k6][_l3], false);
        }
        stigTableBody.appendChild(stigTableBodyRow);
      }
      stigTable.appendChild(stigTableBody);
      guideContent.appendChild(stigTable);
    }
    // gear end

    // signet tables start
    signetTypes.forEach(function (signetType) {
      var signetTitle = document.createElement('h3');
      var signetTable = document.createElement('table');
      signetTable.classList.add("".concat(signetType, "-tbl"));
      var signetTypeIsExclusive = signetType === 'exclusive';
      var headers = [];

      // title
      signetTitle.textContent = "".concat(signetType, " signets");
      signetTitle.setAttribute('id', "".concat(signetType, "-").concat(i + 1, "-").concat(j + 1));
      guideContent.appendChild(signetTitle);
      if (!signetTypeIsExclusive) {
        // signets
        var _signets = document.createElement('div');
        _signets.classList.add('rec-signets', 'flex', 'f-row');
        for (var _k7 = 0; _k7 < _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signet[signetType].length; _k7++) {
          var recSignetDiv = document.createElement('div');
          recSignetDiv.classList.add('signet', 'sig-sep', 'flex', 'fv-center', 'f-col', _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signet[signetType][_k7][0].name.toLowerCase());
          var recSignetsLabel = document.createElement('label');
          recSignetsLabel.textContent = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signet[signetType][_k7][1] === '1' ? 'I' : 'II';
          recSignetDiv.appendChild(recSignetsLabel);
          _signets.appendChild(recSignetDiv);
        }
        guideContent.appendChild(_signets);
        // assign table headers
        headers = _data__WEBPACK_IMPORTED_MODULE_1__.signetTableHeaders;
      } else {
        headers = _data__WEBPACK_IMPORTED_MODULE_1__.exclusiveTableHeaders;
      }

      // table
      var signetTableHead = signetTable.createTHead();
      var signetTableHeadRow = signetTableHead.insertRow();
      for (var _k8 = 0; _k8 < 2; _k8++) {
        var signetTableHeader = document.createElement('th');
        signetTableHeader.textContent = headers[_k8];
        signetTableHeadRow.appendChild(signetTableHeader);
      }
      signetTableHead.appendChild(signetTableHeadRow);
      var signetTableBody = signetTable.createTBody();
      var signets = Object.keys(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signetTable[signetType]);
      signets.forEach(function (key) {
        var signetAmount = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signetTable[signetType][key].length;
        for (var _k9 = 0; _k9 < signetAmount; _k9++) {
          // rows
          var signetTableBodyRow = signetTableBody.insertRow();
          for (var _l4 = 0; _l4 < 2; _l4++) {
            // cells
            // change boolean depending if for exclusive table or the rest
            var applySignetName = signetTypeIsExclusive ? _l4 === 0 : _l4 === 1;
            var applyRowspan = signetTypeIsExclusive ? _k9 === 0 : _k9 === 0 && _l4 === 0;
            if (applySignetName || applyRowspan) {
              var signetTableBodyCell = signetTableBodyRow.insertCell();
              if (applySignetName) {
                // signet name
                signetTableBodyCell.textContent = _guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].signetTable[signetType][key][_k9];
                if (signetTypeIsExclusive) signetTableBodyCell.textContent = "Blessing of ".concat(signetTableBodyCell.textContent);
              } else if (applyRowspan) {
                // signet owner/priority
                signetTableBodyCell.textContent = key;
                signetTableBodyCell.setAttribute('rowspan', "".concat(signetAmount));
              }
            }
          }
          signetTableBody.appendChild(signetTableBodyRow);
        }
      });

      // apply bottom margin on the last signet table
      // so the bottom row wouldn't be partly covered by the fade effect on mobile
      // also useful as spacing in desktop
      if (!hasNotes) signetTable.style.marginBottom = '35px';
      signetTable.appendChild(signetTableHead);
      signetTable.appendChild(signetTableBody);
      guideContent.appendChild(signetTable);
    });
    // signet tables end

    // notes
    if (hasNotes) {
      var notes = document.createElement('div');
      notes.setAttribute('id', "notes-".concat(i + 1, "-").concat(j + 1));
      notes.classList.add('notes');
      notes.innerHTML = "Notes:<br><br>".concat(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds[j].notes);
      guideContent.appendChild(notes);
    }
  };
  for (var j = 0; j < Object.keys(_guide__WEBPACK_IMPORTED_MODULE_0__.valks[i].builds).length; j++) {
    _loop2(j);
  }
  guideContainer.appendChild(guideContent);
  // guides end
};
for (var i = 0; i < _guide__WEBPACK_IMPORTED_MODULE_0__.valks.length; i++) {
  _loop(i);
}
// DOM generation end

/***/ }),

/***/ "./src/scripts/data.ts":
/*!*****************************!*\
  !*** ./src/scripts/data.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   abfl: () => (/* binding */ abfl),
/* harmony export */   ae: () => (/* binding */ ae),
/* harmony export */   allb: () => (/* binding */ allb),
/* harmony export */   allm: () => (/* binding */ allm),
/* harmony export */   allt: () => (/* binding */ allt),
/* harmony export */   anOldPalsLegacy: () => (/* binding */ anOldPalsLegacy),
/* harmony export */   anab: () => (/* binding */ anab),
/* harmony export */   anam: () => (/* binding */ anam),
/* harmony export */   anat: () => (/* binding */ anat),
/* harmony export */   aponia: () => (/* binding */ aponia),
/* harmony export */   asdi: () => (/* binding */ asdi),
/* harmony export */   aslb: () => (/* binding */ aslb),
/* harmony export */   aslm: () => (/* binding */ aslm),
/* harmony export */   aslt: () => (/* binding */ aslt),
/* harmony export */   baim: () => (/* binding */ baim),
/* harmony export */   basb: () => (/* binding */ basb),
/* harmony export */   basm: () => (/* binding */ basm),
/* harmony export */   bast: () => (/* binding */ bast),
/* harmony export */   becauseOfYou: () => (/* binding */ becauseOfYou),
/* harmony export */   benb: () => (/* binding */ benb),
/* harmony export */   benm: () => (/* binding */ benm),
/* harmony export */   bent: () => (/* binding */ bent),
/* harmony export */   biab: () => (/* binding */ biab),
/* harmony export */   biam: () => (/* binding */ biam),
/* harmony export */   biat: () => (/* binding */ biat),
/* harmony export */   bke: () => (/* binding */ bke),
/* harmony export */   blda: () => (/* binding */ blda),
/* harmony export */   boundlessFeeling: () => (/* binding */ boundlessFeeling),
/* harmony export */   boundlessLogos: () => (/* binding */ boundlessLogos),
/* harmony export */   br: () => (/* binding */ br),
/* harmony export */   brob: () => (/* binding */ brob),
/* harmony export */   brom: () => (/* binding */ brom),
/* harmony export */   brot: () => (/* binding */ brot),
/* harmony export */   buffTableHeaders: () => (/* binding */ buffTableHeaders),
/* harmony export */   buffs: () => (/* binding */ buffs),
/* harmony export */   burden: () => (/* binding */ burden),
/* harmony export */   carb: () => (/* binding */ carb),
/* harmony export */   carm: () => (/* binding */ carm),
/* harmony export */   cart: () => (/* binding */ cart),
/* harmony export */   cezb: () => (/* binding */ cezb),
/* harmony export */   cezm: () => (/* binding */ cezm),
/* harmony export */   cezt: () => (/* binding */ cezt),
/* harmony export */   chrb: () => (/* binding */ chrb),
/* harmony export */   chrm: () => (/* binding */ chrm),
/* harmony export */   chrt: () => (/* binding */ chrt),
/* harmony export */   codu: () => (/* binding */ codu),
/* harmony export */   dabr: () => (/* binding */ dabr),
/* harmony export */   danb: () => (/* binding */ danb),
/* harmony export */   danm: () => (/* binding */ danm),
/* harmony export */   dant: () => (/* binding */ dant),
/* harmony export */   dirb: () => (/* binding */ dirb),
/* harmony export */   dirm: () => (/* binding */ dirm),
/* harmony export */   dirt: () => (/* binding */ dirt),
/* harmony export */   doeg: () => (/* binding */ doeg),
/* harmony export */   doin: () => (/* binding */ doin),
/* harmony export */   dore: () => (/* binding */ dore),
/* harmony export */   dosa: () => (/* binding */ dosa),
/* harmony export */   dose: () => (/* binding */ dose),
/* harmony export */   dovo: () => (/* binding */ dovo),
/* harmony export */   dp: () => (/* binding */ dp),
/* harmony export */   drab: () => (/* binding */ drab),
/* harmony export */   dram: () => (/* binding */ dram),
/* harmony export */   drat: () => (/* binding */ drat),
/* harmony export */   dreamfulGold: () => (/* binding */ dreamfulGold),
/* harmony export */   ecpa: () => (/* binding */ ecpa),
/* harmony export */   eden: () => (/* binding */ eden),
/* harmony export */   elas: () => (/* binding */ elas),
/* harmony export */   elpb: () => (/* binding */ elpb),
/* harmony export */   elpm: () => (/* binding */ elpm),
/* harmony export */   elpt: () => (/* binding */ elpt),
/* harmony export */   elyb: () => (/* binding */ elyb),
/* harmony export */   elym: () => (/* binding */ elym),
/* harmony export */   elyt: () => (/* binding */ elyt),
/* harmony export */   emblemTableHeaders: () => (/* binding */ emblemTableHeaders),
/* harmony export */   emblemTableTimeColumn: () => (/* binding */ emblemTableTimeColumn),
/* harmony export */   emptyLikeShala: () => (/* binding */ emptyLikeShala),
/* harmony export */   eogl: () => (/* binding */ eogl),
/* harmony export */   exclusiveTableHeaders: () => (/* binding */ exclusiveTableHeaders),
/* harmony export */   fafl: () => (/* binding */ fafl),
/* harmony export */   fallingInPastLight: () => (/* binding */ fallingInPastLight),
/* harmony export */   farawayShip: () => (/* binding */ farawayShip),
/* harmony export */   feastOfEmptiness: () => (/* binding */ feastOfEmptiness),
/* harmony export */   first: () => (/* binding */ first),
/* harmony export */   forbiddenSeed: () => (/* binding */ forbiddenSeed),
/* harmony export */   forgetMeNot: () => (/* binding */ forgetMeNot),
/* harmony export */   fr: () => (/* binding */ fr),
/* harmony export */   fragileFriend: () => (/* binding */ fragileFriend),
/* harmony export */   frna: () => (/* binding */ frna),
/* harmony export */   goldGoblet: () => (/* binding */ goldGoblet),
/* harmony export */   goodOldDays: () => (/* binding */ goodOldDays),
/* harmony export */   greyScaleRainbow: () => (/* binding */ greyScaleRainbow),
/* harmony export */   griseo: () => (/* binding */ griseo),
/* harmony export */   hanb: () => (/* binding */ hanb),
/* harmony export */   hanm: () => (/* binding */ hanm),
/* harmony export */   hant: () => (/* binding */ hant),
/* harmony export */   hawp: () => (/* binding */ hawp),
/* harmony export */   hb: () => (/* binding */ hb),
/* harmony export */   heavyAsAMillionLives: () => (/* binding */ heavyAsAMillionLives),
/* harmony export */   heso: () => (/* binding */ heso),
/* harmony export */   homeLost: () => (/* binding */ homeLost),
/* harmony export */   homeTown: () => (/* binding */ homeTown),
/* harmony export */   hua: () => (/* binding */ hua),
/* harmony export */   ireb: () => (/* binding */ ireb),
/* harmony export */   irem: () => (/* binding */ irem),
/* harmony export */   iret: () => (/* binding */ iret),
/* harmony export */   irhe: () => (/* binding */ irhe),
/* harmony export */   isMobile: () => (/* binding */ isMobile),
/* harmony export */   itWillBeWritten: () => (/* binding */ itWillBeWritten),
/* harmony export */   kafb: () => (/* binding */ kafb),
/* harmony export */   kafm: () => (/* binding */ kafm),
/* harmony export */   kaft: () => (/* binding */ kaft),
/* harmony export */   kalpas: () => (/* binding */ kalpas),
/* harmony export */   kevin: () => (/* binding */ kevin),
/* harmony export */   kevo: () => (/* binding */ kevo),
/* harmony export */   keyToTheDeep: () => (/* binding */ keyToTheDeep),
/* harmony export */   kosma: () => (/* binding */ kosma),
/* harmony export */   le: () => (/* binding */ le),
/* harmony export */   leeb: () => (/* binding */ leeb),
/* harmony export */   leet: () => (/* binding */ leet),
/* harmony export */   lightAsABodhiLeaf: () => (/* binding */ lightAsABodhiLeaf),
/* harmony export */   linb: () => (/* binding */ linb),
/* harmony export */   linm: () => (/* binding */ linm),
/* harmony export */   lint: () => (/* binding */ lint),
/* harmony export */   lisb: () => (/* binding */ lisb),
/* harmony export */   lism: () => (/* binding */ lism),
/* harmony export */   list: () => (/* binding */ list),
/* harmony export */   loco: () => (/* binding */ loco),
/* harmony export */   ma: () => (/* binding */ ma),
/* harmony export */   madKingsMask: () => (/* binding */ madKingsMask),
/* harmony export */   marm: () => (/* binding */ marm),
/* harmony export */   memory: () => (/* binding */ memory),
/* harmony export */   miat: () => (/* binding */ miat),
/* harmony export */   micb: () => (/* binding */ micb),
/* harmony export */   mict: () => (/* binding */ mict),
/* harmony export */   miec: () => (/* binding */ miec),
/* harmony export */   miki: () => (/* binding */ miki),
/* harmony export */   miwa: () => (/* binding */ miwa),
/* harmony export */   mobius: () => (/* binding */ mobius),
/* harmony export */   mubl: () => (/* binding */ mubl),
/* harmony export */   murb: () => (/* binding */ murb),
/* harmony export */   murm: () => (/* binding */ murm),
/* harmony export */   murt: () => (/* binding */ murt),
/* harmony export */   no: () => (/* binding */ no),
/* harmony export */   nost: () => (/* binding */ nost),
/* harmony export */   nure: () => (/* binding */ nure),
/* harmony export */   obdo: () => (/* binding */ obdo),
/* harmony export */   obwi: () => (/* binding */ obwi),
/* harmony export */   optional: () => (/* binding */ optional),
/* harmony export */   outOfReach: () => (/* binding */ outOfReach),
/* harmony export */   paac: () => (/* binding */ paac),
/* harmony export */   pagb: () => (/* binding */ pagb),
/* harmony export */   pagm: () => (/* binding */ pagm),
/* harmony export */   pagt: () => (/* binding */ pagt),
/* harmony export */   pardofelis: () => (/* binding */ pardofelis),
/* harmony export */   pobl: () => (/* binding */ pobl),
/* harmony export */   proofOfGoodAndEvil: () => (/* binding */ proofOfGoodAndEvil),
/* harmony export */   psuedoMiracle: () => (/* binding */ psuedoMiracle),
/* harmony export */   puph: () => (/* binding */ puph),
/* harmony export */   ragb: () => (/* binding */ ragb),
/* harmony export */   ragm: () => (/* binding */ ragm),
/* harmony export */   ragt: () => (/* binding */ ragt),
/* harmony export */   rainbowOfAbsence: () => (/* binding */ rainbowOfAbsence),
/* harmony export */   rc: () => (/* binding */ rc),
/* harmony export */   rebb: () => (/* binding */ rebb),
/* harmony export */   rebt: () => (/* binding */ rebt),
/* harmony export */   reinforcement: () => (/* binding */ reinforcement),
/* harmony export */   resolve: () => (/* binding */ resolve),
/* harmony export */   robb: () => (/* binding */ robb),
/* harmony export */   robm: () => (/* binding */ robm),
/* harmony export */   robt: () => (/* binding */ robt),
/* harmony export */   rudr: () => (/* binding */ rudr),
/* harmony export */   ruinedLegacy: () => (/* binding */ ruinedLegacy),
/* harmony export */   sa: () => (/* binding */ sa),
/* harmony export */   saas: () => (/* binding */ saas),
/* harmony export */   saga: () => (/* binding */ saga),
/* harmony export */   sakura: () => (/* binding */ sakura),
/* harmony export */   saun: () => (/* binding */ saun),
/* harmony export */   second: () => (/* binding */ second),
/* harmony export */   sena: () => (/* binding */ sena),
/* harmony export */   seru: () => (/* binding */ seru),
/* harmony export */   shab: () => (/* binding */ shab),
/* harmony export */   sham: () => (/* binding */ sham),
/* harmony export */   shat: () => (/* binding */ shat),
/* harmony export */   shsb: () => (/* binding */ shsb),
/* harmony export */   shsm: () => (/* binding */ shsm),
/* harmony export */   shst: () => (/* binding */ shst),
/* harmony export */   shur: () => (/* binding */ shur),
/* harmony export */   siem: () => (/* binding */ siem),
/* harmony export */   signetSummary: () => (/* binding */ signetSummary),
/* harmony export */   signetTableHeaders: () => (/* binding */ signetTableHeaders),
/* harmony export */   sirb: () => (/* binding */ sirb),
/* harmony export */   sirm: () => (/* binding */ sirm),
/* harmony export */   sirt: () => (/* binding */ sirt),
/* harmony export */   skth: () => (/* binding */ skth),
/* harmony export */   sldr: () => (/* binding */ sldr),
/* harmony export */   sn: () => (/* binding */ sn),
/* harmony export */   ss: () => (/* binding */ ss),
/* harmony export */   stainedSakura: () => (/* binding */ stainedSakura),
/* harmony export */   start: () => (/* binding */ start),
/* harmony export */   sted: () => (/* binding */ sted),
/* harmony export */   su: () => (/* binding */ su),
/* harmony export */   sumu: () => (/* binding */ sumu),
/* harmony export */   supportTableHeaders: () => (/* binding */ supportTableHeaders),
/* harmony export */   supportTableTypeColumn: () => (/* binding */ supportTableTypeColumn),
/* harmony export */   tham: () => (/* binding */ tham),
/* harmony export */   theFirstScale: () => (/* binding */ theFirstScale),
/* harmony export */   theLonelyMoon: () => (/* binding */ theLonelyMoon),
/* harmony export */   thornyCrown: () => (/* binding */ thornyCrown),
/* harmony export */   thsa: () => (/* binding */ thsa),
/* harmony export */   tinFlask: () => (/* binding */ tinFlask),
/* harmony export */   topa: () => (/* binding */ topa),
/* harmony export */   tsukimiHimiko: () => (/* binding */ tsukimiHimiko),
/* harmony export */   vc: () => (/* binding */ vc),
/* harmony export */   veilOfTears: () => (/* binding */ veilOfTears),
/* harmony export */   verb: () => (/* binding */ verb),
/* harmony export */   verm: () => (/* binding */ verm),
/* harmony export */   vert: () => (/* binding */ vert),
/* harmony export */   vke: () => (/* binding */ vke),
/* harmony export */   vv: () => (/* binding */ vv),
/* harmony export */   wanb: () => (/* binding */ wanb),
/* harmony export */   wanm: () => (/* binding */ wanm),
/* harmony export */   want: () => (/* binding */ want),
/* harmony export */   welb: () => (/* binding */ welb),
/* harmony export */   welm: () => (/* binding */ welm),
/* harmony export */   welt: () => (/* binding */ welt),
/* harmony export */   whpa: () => (/* binding */ whpa),
/* harmony export */   wilb: () => (/* binding */ wilb),
/* harmony export */   wilm: () => (/* binding */ wilm),
/* harmony export */   wilt: () => (/* binding */ wilt),
/* harmony export */   zenb: () => (/* binding */ zenb),
/* harmony export */   zenm: () => (/* binding */ zenm),
/* harmony export */   zent: () => (/* binding */ zent)
/* harmony export */ });
var isMobile = /Mobi/i.test(window.navigator.userAgent);
// priority terms
var start = 'Start';
var first = '1st';
var second = '2nd';
var reinforcement = 'Reinforcement';
var optional = 'Optional';
var no = 'No';
// table column values & headers
var supportTableHeaders = ['Type', 'Supp1', 'Supp2'];
var supportTableTypeColumn = ['Utility', 'Damage'];
var emblemTableHeaders = ['Time', 'Emblems'];
var emblemTableTimeColumn = ['Start', 'Shop 1', '16F'];
var exclusiveTableHeaders = ['Signet', 'Priority'];
var signetTableHeaders = ['Owner', 'Signet'];
var buffTableHeaders = ['Cost', 'Effect'];
// emblems
var anOldPalsLegacy = {
  name: 'An Old Pal\'s Legacy',
  acr: 'aopl'
};
var becauseOfYou = {
  name: 'Because of You',
  acr: 'boy'
};
var boundlessFeeling = {
  name: 'Boundless Feeling',
  acr: 'bf'
};
var boundlessLogos = {
  name: 'Boundless Logos',
  acr: 'bl'
};
var burden = {
  name: 'Burden',
  acr: 'b'
};
var dreamfulGold = {
  name: 'Dreamful Gold',
  acr: 'dg'
};
var emptyLikeShala = {
  name: 'Empty Like Shala',
  acr: 'els'
};
var fallingInPastLight = {
  name: 'Falling in Past Light',
  acr: 'fipl'
};
var farawayShip = {
  name: 'Faraway Ship',
  acr: 'fas'
};
var feastOfEmptiness = {
  name: 'Feast of Emptiness',
  acr: 'foe'
};
var forbiddenSeed = {
  name: 'Forbidden Seed',
  acr: 'fos'
};
var fragileFriend = {
  name: 'Fragile Friend',
  acr: 'ff'
};
var forgetMeNot = {
  name: 'Forget-Me-Not',
  acr: 'fmt'
};
var goldGoblet = {
  name: 'Gold Goblet',
  acr: 'gg'
};
var goodOldDays = {
  name: 'Good Old Days',
  acr: 'god'
};
var greyScaleRainbow = {
  name: 'Grey-scale Rainbow',
  acr: 'gsr'
};
var heavyAsAMillionLives = {
  name: 'Heavy as a Million Lives',
  acr: 'haaml'
};
var homeLost = {
  name: 'Home Lost',
  acr: 'hl'
};
var homeTown = {
  name: 'Hometown',
  acr: 'h'
};
var itWillBeWritten = {
  name: 'It Will Be Written',
  acr: 'iwbw'
};
var keyToTheDeep = {
  name: 'Key to the Deep',
  acr: 'kttd'
};
var lightAsABodhiLeaf = {
  name: 'Light as a Bodhi Leaf',
  acr: 'laabl'
};
var madKingsMask = {
  name: 'Mad King\'s Mask',
  acr: 'mkm'
};
var memory = {
  name: 'Memory',
  acr: 'm'
};
var outOfReach = {
  name: 'Out of Reach',
  acr: 'oor'
};
var proofOfGoodAndEvil = {
  name: 'Proof of Good and Evil',
  acr: 'pogae'
};
var psuedoMiracle = {
  name: 'Psuedo Miracle',
  acr: 'pm'
};
var rainbowOfAbsence = {
  name: 'Rainbow of Absence',
  acr: 'roa'
};
var resolve = {
  name: 'Resolve',
  acr: 'r'
};
var ruinedLegacy = {
  name: 'Ruined Legacy',
  acr: 'rl'
};
var stainedSakura = {
  name: 'Stained Sakura',
  acr: 'sts'
};
var theFirstScale = {
  name: 'The First Scale',
  acr: 'tfs'
};
var theLonelyMoon = {
  name: 'The Lonely Moon',
  acr: 'tlm'
};
var tinFlask = {
  name: 'Tin Flask',
  acr: 'tf'
};
var thornyCrown = {
  name: 'Thorny Crown',
  acr: 'tc'
};
var tsukimiHimiko = {
  name: 'Tsukimi Himiko',
  acr: 'th'
};
var veilOfTears = {
  name: 'Veil of Tears',
  acr: 'vot'
};
// support valks
var ae = {
  name: 'Azure Empyrea',
  acr: 'ae'
};
var bke = {
  name: 'Bright Knight: Excelsis',
  acr: 'bke'
};
var br = {
  name: 'Blood Rose',
  acr: 'br'
};
var dp = {
  name: 'Divine Prayer',
  acr: 'dp'
};
var fr = {
  name: 'Fallen Rosemary',
  acr: 'fr'
};
var hb = {
  name: 'Haxxor Bunny',
  acr: 'hb'
};
var le = {
  name: 'Lightning Empress',
  acr: 'le'
};
var ma = {
  name: 'Midnight Absinthe',
  acr: 'ma'
};
var rc = {
  name: 'Reverist Calico',
  acr: 'rc'
};
var sa = {
  name: 'Starlit Astrologos',
  acr: 'sa'
};
var sn = {
  name: 'Stygian Nymph',
  acr: 'sn'
};
var ss = {
  name: 'Snowy Sniper',
  acr: 'ss'
};
var vc = {
  name: 'Valkyrie Chariot',
  acr: 'vc'
};
var vke = {
  name: 'Vermilion Knight: Eclipse',
  acr: 'vke'
};
// stigmatas
var allt = {
  name: 'Allan Poe T',
  acr: 'allt'
};
var allm = {
  name: 'Allan Poe M',
  acr: 'allm'
};
var allb = {
  name: 'Allan Poe B',
  acr: 'allb'
};
var anat = {
  name: 'Ana Schariac T',
  acr: 'anat'
};
var anam = {
  name: 'Ana Schariac M',
  acr: 'anam'
};
var anab = {
  name: 'Ana Schariac B',
  acr: 'anab'
};
var aslt = {
  name: 'Aslaug T',
  acr: 'aslt'
};
var aslm = {
  name: 'Aslaug M',
  acr: 'aslm'
};
var aslb = {
  name: 'Aslaug B',
  acr: 'aslb'
};
var bast = {
  name: 'Bastet T',
  acr: 'bast'
};
var basm = {
  name: 'Bastet M',
  acr: 'basm'
};
var basb = {
  name: 'Bastet B',
  acr: 'basb'
};
var bent = {
  name: 'Benares: Awakening T',
  acr: 'bent'
};
var benm = {
  name: 'Benares: Awakening M',
  acr: 'benm'
};
var benb = {
  name: 'Benares: Awakening B',
  acr: 'benb'
};
var biat = {
  name: 'Bianka: Theatre T',
  acr: 'biat'
};
var biam = {
  name: 'Bianka: Theatre M',
  acr: 'biam'
};
var biab = {
  name: 'Bianka: Theatre B',
  acr: 'biab'
};
var brot = {
  name: 'Bronya: N-EX T',
  acr: 'brot'
};
var brom = {
  name: 'Bronya: N-EX M',
  acr: 'brom'
};
var brob = {
  name: 'Bronya: N-EX B',
  acr: 'brob'
};
var cart = {
  name: 'Carlo Collodi T',
  acr: 'cart'
};
var carm = {
  name: 'Carlo Collodi M',
  acr: 'carm'
};
var carb = {
  name: 'Carlo Collodi B',
  acr: 'carb'
};
var cezt = {
  name: 'Cezanne T',
  acr: 'cezt'
};
var cezm = {
  name: 'Cezanne M',
  acr: 'cezm'
};
var cezb = {
  name: 'Cezanne B',
  acr: 'cezb'
};
var chrt = {
  name: 'Idol Transformation T',
  acr: 'chrt'
};
var chrm = {
  name: 'Idol Transformation M',
  acr: 'chrm'
};
var chrb = {
  name: 'Idol Transformation B',
  acr: 'chrb'
};
var dant = {
  name: 'Dante T',
  acr: 'dant'
};
var danm = {
  name: 'Dante M',
  acr: 'danm'
};
var danb = {
  name: 'Dante B',
  acr: 'danb'
};
var dirt = {
  name: 'Dirac T',
  acr: 'dirt'
};
var dirm = {
  name: 'Dirac M',
  acr: 'dirm'
};
var dirb = {
  name: 'Dirac B',
  acr: 'dirb'
};
var drat = {
  name: 'Dracula T',
  acr: 'drat'
};
var dram = {
  name: 'Dracula M',
  acr: 'dram'
};
var drab = {
  name: 'Dracula B',
  acr: 'drab'
};
var elpt = {
  name: 'Elysia: Pristine T',
  acr: 'elpt'
};
var elpm = {
  name: 'Elysia: Pristine M',
  acr: 'elpm'
};
var elpb = {
  name: 'Elysia: Pristine B',
  acr: 'elpb'
};
var elyt = {
  name: 'Elysia T',
  acr: 'elyt'
};
var elym = {
  name: 'Elysia M',
  acr: 'elym'
};
var elyb = {
  name: 'Elysia B',
  acr: 'elyb'
};
var hant = {
  name: 'Handel T',
  acr: 'hant'
};
var hanm = {
  name: 'Handel M',
  acr: 'hanm'
};
var hanb = {
  name: 'Handel B',
  acr: 'hanb'
};
var iret = {
  name: 'Irene Adler T',
  acr: 'iret'
};
var irem = {
  name: 'Irene Adler M',
  acr: 'irem'
};
var ireb = {
  name: 'Irene Adler B',
  acr: 'ireb'
};
var kaft = {
  name: 'Kafka T',
  acr: 'kaft'
};
var kafm = {
  name: 'Kafka M',
  acr: 'kafm'
};
var kafb = {
  name: 'Kafka B',
  acr: 'kafb'
};
var leet = {
  name: 'Leeuwenhoek T',
  acr: 'leet'
};
var leeb = {
  name: 'Leeuwenhoek B',
  acr: 'leeb'
};
var lint = {
  name: 'Linnaeus T',
  acr: 'lint'
};
var linm = {
  name: 'Linnaeus M',
  acr: 'linm'
};
var linb = {
  name: 'Linnaeus B',
  acr: 'linb'
};
var list = {
  name: 'Li Sushang: Shenzhou Reminiscence T',
  acr: 'list'
};
var lism = {
  name: 'Li Sushang: Shenzhou Reminiscence M',
  acr: 'lism'
};
var lisb = {
  name: 'Li Sushang: Shenzhou Reminiscence B',
  acr: 'lisb'
};
var marm = {
  name: 'Marco Polo M',
  acr: 'marm'
};
var mict = {
  name: 'Michealangelo T',
  acr: 'mict'
};
var micb = {
  name: 'Michealangelo B',
  acr: 'micb'
};
var murt = {
  name: 'Murata Himeko T',
  acr: 'murt'
};
var murm = {
  name: 'Murata Himeko M',
  acr: 'murm'
};
var murb = {
  name: 'Murata Himeko B',
  acr: 'murb'
};
var pagt = {
  name: 'Paganini T',
  acr: 'pagt'
};
var pagm = {
  name: 'Paganini M',
  acr: 'pagm'
};
var pagb = {
  name: 'Paganini B',
  acr: 'pagb'
};
var ragt = {
  name: 'Ragna T',
  acr: 'ragt'
};
var ragm = {
  name: 'Ragna M',
  acr: 'ragm'
};
var ragb = {
  name: 'Ragna B',
  acr: 'ragb'
};
var rebt = {
  name: 'Mei Spectramancer T',
  acr: 'rebt'
};
var rebb = {
  name: 'Fu Hua - Onyx Simurgh B',
  acr: 'rebb'
};
var robt = {
  name: 'Robert Peary T',
  acr: 'robt'
};
var robm = {
  name: 'Robert Peary M',
  acr: 'robm'
};
var robb = {
  name: 'Robert Peary B',
  acr: 'robb'
};
var shat = {
  name: 'Shakespeare: Adrift T',
  acr: 'shat'
};
var sham = {
  name: 'Shakespeare: Adrift M',
  acr: 'sham'
};
var shab = {
  name: 'Shakespeare: Adrift B',
  acr: 'shab'
};
var shst = {
  name: 'Raksha T',
  acr: 'shst'
};
var shsm = {
  name: 'Sushang M',
  acr: 'shsm'
};
var shsb = {
  name: 'Empyrea: Phoenix B',
  acr: 'shsb'
};
var siem = {
  name: 'Siegfried Kaslana M',
  acr: 'siem'
};
var sirt = {
  name: 'Sirin: Ascendant T',
  acr: 'sirt'
};
var sirm = {
  name: 'Sirin: Ascendant M',
  acr: 'sirm'
};
var sirb = {
  name: 'Sirin: Ascendant B',
  acr: 'sirb'
};
var tham = {
  name: 'Thales M',
  acr: 'tham'
};
var vert = {
  name: 'Verne T',
  acr: 'vert'
};
var verm = {
  name: 'Verne M',
  acr: 'verm'
};
var verb = {
  name: 'Verne B',
  acr: 'verb'
};
var want = {
  name: 'Wang Zhenyi T',
  acr: 'want'
};
var wanm = {
  name: 'Wang Zhenyi M',
  acr: 'wanm'
};
var wanb = {
  name: 'Wang Zhenyi B',
  acr: 'wanb'
};
var welt = {
  name: 'Welt Yang T',
  acr: 'welt'
};
var welm = {
  name: 'Welt Yang M',
  acr: 'welm'
};
var welb = {
  name: 'Welt Yang B',
  acr: 'welb'
};
var wilt = {
  name: 'Willows T',
  acr: 'wilt'
};
var wilm = {
  name: 'Willows M',
  acr: 'wilm'
};
var wilb = {
  name: 'Willows B',
  acr: 'wilb'
};
var zent = {
  name: 'Zeno T',
  acr: 'zent'
};
var zenm = {
  name: 'Zeno M',
  acr: 'zenm'
};
var zenb = {
  name: 'Zeno B',
  acr: 'zenb'
};
// weapons
var hawp = {
  name: '',
  acr: 'hawp'
};
var abfl = {
  name: 'Abyss Flower: Liminal Spiral',
  acr: 'abfl'
};
var asdi = {
  name: 'Astral Divide: Pisces',
  acr: 'asdi'
};
var baim = {
  name: 'Basilik\'s Image: Deathshroud',
  acr: 'baim'
};
var blda = {
  name: 'Blood Dance',
  acr: 'blda'
};
var codu = {
  name: 'Cosmic Duality',
  acr: 'codu'
};
var dabr = {
  name: 'Dawn Breaker: Talwar',
  acr: 'dabr'
};
var doeg = {
  name: 'Domain of Ego: Flawless Return',
  acr: 'doeg'
};
var doin = {
  name: 'Domain of Incandescence',
  acr: 'doin'
};
var dore = {
  name: 'Domain of Revelation',
  acr: 'dore'
};
var dosa = {
  name: 'Domain of Sanction',
  acr: 'dosa'
};
var dose = {
  name: 'Domain of Sentience',
  acr: 'dose'
};
var dovo = {
  name: 'Domain of the Void',
  acr: 'dovo'
};
var ecpa = {
  name: 'Echo of Paradise',
  acr: 'ecpa'
};
var elas = {
  name: 'Elysian Astra: Heart\'s Color',
  acr: 'elas'
};
var eogl = {
  name: 'Eos Gloria',
  acr: 'eogl'
};
var fafl = {
  name: 'Falcon Flare: FINAL',
  acr: 'fafl'
};
var frna = {
  name: 'Frozen Naraka',
  acr: 'frna'
};
var heso = {
  name: 'Hekate\'s Sombre',
  acr: 'heso'
};
var irhe = {
  name: 'Iris of Helheim',
  acr: 'irhe'
};
var kevo = {
  name: 'Keys of the Void',
  acr: 'kevo'
};
var loco = {
  name: 'Lost Conviction: Damnation',
  acr: 'loco'
};
var miat = {
  name: 'Midnight Ataegina',
  acr: 'miat'
};
var miec = {
  name: 'Midnight Eclipse',
  acr: 'miec'
};
var miki = {
  name: 'Miracle Kissy Pillow',
  acr: 'miki'
};
var miwa = {
  name: 'Mitternachts Waltz',
  acr: 'miwa'
};
var mubl = {
  name: 'Muramasa Bloodlust',
  acr: 'mubl'
};
var nost = {
  name: 'Nocturnal Stealth: Beam',
  acr: 'nost'
};
var nure = {
  name: 'Nuada\'s Revenge',
  acr: 'nure'
};
var obdo = {
  name: 'Oblivion Down',
  acr: 'obdo'
};
var obwi = {
  name: 'Obscuring Wing',
  acr: 'obwi'
};
var paac = {
  name: 'Path to Acheron: Kindred',
  acr: 'paac'
};
var pobl = {
  name: 'Positron Blasters',
  acr: 'pobl'
};
var puph = {
  name: 'Purana Phantasma',
  acr: 'puph'
};
var rudr = {
  name: 'Rudder in Dream Λ-I',
  acr: 'rudr'
};
var saas = {
  name: 'Sagittarius Astra',
  acr: 'saas'
};
var saga = {
  name: 'Sanguine Gaze',
  acr: 'saga'
};
var saun = {
  name: 'Sanguine Gaze: Union',
  acr: 'saun'
};
var sena = {
  name: '7ToR Narukami',
  acr: 'sena'
};
var seru = {
  name: '7ToR Rumble',
  acr: 'seru'
};
var shur = {
  name: 'Shuhadaku of Uriel',
  acr: 'shur'
};
var skth = {
  name: 'Skadi of Thrymheim',
  acr: 'skth'
};
var sldr = {
  name: 'Sleeper\'s Dream',
  acr: 'sldr'
};
var sted = {
  name: 'Star of Eden: World',
  acr: 'sted'
};
var sumu = {
  name: 'Surtr Muspellsverd',
  acr: 'sumu'
};
var thsa = {
  name: '3rd Sacred Relic',
  acr: 'thsa'
};
var topa = {
  name: 'Tower of the Past: Silk Ladder',
  acr: 'topa'
};
var whpa = {
  name: 'Whisper of the Past: Sonnet',
  acr: 'whpa'
};
// buffs
var buffs = [
// 0
['RPC-6626 weak to Ice', 'RPC-6626 weak to Elements', 'Couatl: Revenant', 'Huodou', 'DJXY'],
// 5
['Same type support damage bonus', 'At max HP gain 1 SP/s', 'Ultimate Evasion recovers 10 SP', 'Valk type matching enemy +TDM', 'Weapon active vulnerability', 'Melee ATK for 10% TDM',
//
'SP cap up', 'SP +30', 'Shieldbreak 5 SP', 'Charged ATK vulnerability'],
// 10
['Enemy affected by status gives TDM', 'TDM+15% until damage taken', 'For every 100 HP + TDM', 'Ignite or para, valk +dmg', '60 combo vulnerability', 'Both damage boosts after ultimate evasion',
//
'Paralyzed or bleeding TDM bonus', 'Support type DMG bonus', 'Shield broken vulnerability', 'Ultimate evasion dmg boost', 'Melee atk TDM',
//
'Counter type TDM boost'],
// 15
['SP usage vulnerability', 'Weapon type TDM bonus', 'Same type support valk + breach', '300 elemental DMG vulnerability', 'Combo ATK bonus', 'Bleed vulnerability',
//
'Weapon type breach', 'Melee vulnerability', 'Ult vulnerability', 'QTE bonus']];
// signets
var aponia = {
  name: 'Aponia',
  signet: 'Discipline',
  regular: {
    basicAtk: 'First, No Betrayal',
    // evasion, basic atk
    dmgReduc: 'Second, No Deception',
    // dmg reduc, entity
    spRestore: 'Third, No Brutality',
    // combo hit, sp regen
    dmgPhysEle: 'Fourth, No Insolence',
    // weap skill, ult phys & elem dmg
    vuln: 'Fifth, No Falsehood',
    // vuln, exhortation red
    dmgTotal: 'Sixth, No Decadence' // total dmg, qte
  },

  nexus1: {
    name: 'You Shall Be Subject to Numerous Disciplines (Nexus)',
    breachPhysEle: 'You Shall Be Bound by Thy Body',
    // phys ele breach
    limit: 'You Shall Be Committed to Thy Life',
    // exhortation limit
    dmgUlt: 'You Shall Be Witnessed by Thy Heart' // more ult dmg less phy ele basic atk
  },

  nexus2: {
    name: 'You Shall Receive Disciplines\' Blessing (Nexus)',
    dmgPhysEle: 'You Shall Answer Prayers',
    // phys ele dmg
    breachPhysEle: 'You Shall Follow Good',
    // phys ele breach
    vuln: 'You Shall Punish Evil' // vuln
  }
};

var eden = {
  name: 'Eden',
  signet: 'Gold',
  regular: {
    dmgReduc: 'Recitatif of Birds',
    // dmg reduc
    dmgPhysEle: 'Recitatif of Creeks',
    // phys ele dmg
    dmgTotal: 'Recitatif of Eden',
    // total dmg
    spCapInitial: 'Recitatif of Fine Jade',
    // max & initial sp
    spRestoreAtk: 'Recitatif of Fruit Trees',
    // sp restore from atk
    spRestore: 'Recitatif of Good Wine' // sp restore
  },

  nexus1: {
    name: 'Aria of Gold (Nexus)',
    lightning: 'Aria of Dawn',
    // adaptive dmg
    spRestore: 'Aria of Life',
    // sp restore
    vuln: 'Aria of Soil' // vuln
  },

  nexus2: {
    name: 'Echo of Gold (Nexus)',
    lightning: 'Echo of Shrill Wind',
    // adaptive dmg
    vuln: 'Echo of Silent Night',
    // reduce enemy resist
    spCapRestore: 'Echo of Withered Soil' // sp cap, restore sp
  }
};

var griseo = {
  name: 'Griseo',
  signet: 'Stars',
  regular: {
    black: 'Black & Dark',
    // phys ele dmg
    blue: 'Blue & Cold',
    // reduce enemy dmg & move speed
    grey: 'Grey & Empty',
    // taint extension
    red: 'Red & Hot',
    // phys ele dmg
    white: 'White & Bright',
    // sp restore
    yellow: 'Yellow & Warm' // vuln
  },

  nexus1: {
    name: 'Shining Like Stars (Nexus)',
    purple: 'Blooming Like Flowers',
    // total dmg
    orange: 'Burning Like Flames',
    // breach
    green: 'Stretching Like Leaves' // adaptive dmg
  },

  nexus2: {
    name: 'Faded Stars (Nexus)',
    orange: 'A Flame Extinguished',
    // enemy resist
    green: 'Fallen Leaves',
    // adaptive dmg
    purple: 'Petals in the Wind' // effect
  }
};

var hua = {
  name: 'Hua',
  signet: 'Vicissitude',
  regular: {
    dmgEle: 'Dark Garb No More',
    // ele dmg
    dmgPhys: 'Days Gone',
    // phys dmg
    dmgTotal: 'Long trip',
    // total dmg
    dmgReduc: 'Lost and Found',
    // dmg reduc
    breachPhys: 'No One to Share',
    // phys breach
    breachEle: 'Old Dreams Again' // ele breach
  },

  nexus1: {
    name: 'Vivid Vicissitude (Nexus)',
    stackRegen: 'Fallen Flowers',
    // stack per sec
    stackInitial: 'Fleeting Fantasy',
    // initial stack
    stackEffect: 'Forgotten and Forsaken' // increase normal signet stack
  },

  nexus2: {
    name: 'Suffering Mass (Nexus)',
    stackCap: 'Broken Dream',
    //  increase normal signet stack
    extend: 'Go with the Flow',
    // absorb more dmg, extend invincibility
    dmgTotal: 'Worldy Troubles' // total dmg
  }
};

var kalpas = {
  name: 'Kalpas',
  signet: 'Decimation',
  regular: {
    dmgTotal: 'Blade, Grave, and Scar',
    // total dmg
    dmgPhysEle: 'Bone, Blood, and Ribbon',
    // phys ele dmg
    vuln: 'Desireless, Mindless, and Homeless',
    // vuln
    spRestore: 'God, Me, and the Only',
    // sp restore
    dmgReduc: 'Letter, Maniac, and Ravings',
    // dmg reduc
    hp: 'Path, Misfortune, and Written Fate' // hp
  },

  nexus1: {
    name: 'Fight, Struggle, and Decimation (Nexus)',
    fire: 'Burden, Difficulty, and Calamity',
    // adaptive dmg
    bbRecharge: 'Inhuman, Unevil, and Ungodly',
    // lose hp recharge blood boil
    dmgBonus: 'Man, Mask, and Contract' // more dmg to higher hp%
  },

  nexus2: {
    name: 'Soldiers, Scissors, Spoils, and Slaughter (Nexus)',
    dmgBonus: 'Body, Bones, Heart , and Soul',
    // bonus dmg on cap threshold
    absorb: 'Death, Life, Oblivion, and Existence',
    // absorb dmg equal to % of charges
    breachPhysEle: 'Homeland and Friends' // phys ele breach
  }
};

var kevin = {
  name: 'Kevin',
  signet: 'Deliverance',
  regular: {
    breachEle: 'Artifact of the Inhibitor',
    // ele breach
    dmgEle: 'Brand of the Undead',
    // ele dmg
    dmgTotal: 'Goblet of the Giver',
    // total dmg
    breachPhys: 'Mask of the Predator',
    // phys breach
    dmgPhys: 'Pendant of the Watcher',
    // phys dmg
    spRestore: 'Rochet of the Pilgrim' // sp restore
  },

  nexus1: {
    name: 'Blade of the Deliverer (Nexus)',
    effect: 'Crusade of the Deliverer',
    // increase normal signet buff
    dur: 'Echo of the Deliverer',
    // increase normal signet dur
    burst: 'Flock of the Deliverer' // burst mode
  },

  nexus2: {
    name: 'Shadow of the Deliverer (Nexus)',
    effect: 'Dream of the Deliverer',
    // increase normal signet buff
    dmgTotal: 'Resolve of the Deliverer',
    // total dmg
    ignoreRes: 'Triumph of the Deliverer' // ignore def & ele resist
  }
};

var kosma = {
  name: 'Kosma',
  signet: 'Daybreak',
  regular: {
    spRestore: 'Breath that Slanders Sulphur',
    // sp restore
    dmgShield: 'Eyes that Overlook the Vicious Abyss',
    // shield dmg
    extend: 'Heart that Committed Seven Crimes',
    // time ext
    ult: 'Horns that Rip the Bleak Sky',
    // ult
    atk: 'Talons that Desecrate the Santuary',
    // basic/combo/charged
    evasion: 'Wings that Mask the Sanguine Moon' // evasion
  },

  nexus1: {
    name: 'Daybreak, an Undying Light (Nexus)',
    breachPhysEle: 'Unbending Hero',
    // phys ele breach
    dmgPhysEle: 'Undetermined Judgement',
    // phys ele dmg
    vuln: 'Unwavering Promise' // vuln
  },

  nexus2: {
    name: 'Daybreak, Lone Beacon (Nexus)',
    hpRestore: 'Choice, Ensuing Regret',
    // restore hp
    breachPhysEle: 'Dawn, Perpetual Wait',
    // phys ele breach
    dmgPhysEle: 'Heart, Unshakable Character' // phys ele dmg
  }
};

var mobius = {
  name: 'Mobius',
  signet: 'Infinity',
  regular: {
    elfSp: 'Dark Pupil',
    // elf sp
    vuln: 'Entwined [P]',
    // vuln
    dmgEntity: 'Lip Poison [E]',
    // entity dmg
    cdReduc: 'Lodging [C]',
    // cd reduc
    dmgTotal: 'Rodent [V]',
    // total dmg
    dmgReduc: 'Silent [B]' // dmg reduc
  },

  nexus1: {
    name: 'Infinite [X] (Nexus)',
    dmgTotal: 'Dead [X]',
    // total dmg
    breachPhysEle: 'Newborn [X]',
    // phys ele breach
    reduce: 'Unknown [X]' // reduce elf ult & supp valk skills
  },

  nexus2: {
    name: 'Infinite [M] (Nexus)',
    vuln: 'Collapsed [M]',
    // vuln
    dmgPhysEle: 'Immortal [M]',
    // phys ele dmg
    extend: 'Sacrificial [M]' // increase sentience sync duration
  }
};

var pardofelis = {
  name: 'Pardofelis',
  signet: 'Reverie',
  regular: {
    dmgPhysEle: 'Back-Curled Tail',
    // phys ele dmg
    spHpRestore: 'Flexible P&C',
    // restore hp sp
    curr: 'Merchant\'s Philosophy',
    // currency
    dmgTotal: 'Motto of Meow',
    // total dmg
    spHpCap: 'Neighborhood Chatters',
    // max hp sp
    currKill: 'Shiny & Valuable' // currency/kill
  },

  nexus1: {
    name: 'Empty Dreams, Self, Set, and Joy (Nexus)',
    evasion: 'Improvised Drama',
    // evasion trigger move
    ult: 'Setsuna Paw',
    // ult trigger move
    breachPhysEle: 'This Is Now Where We Die' // phys ele breach
  },

  nexus2: {
    name: 'Empty Illusions, Empty Fantasies (Nexus)',
    dmgTotal: 'Improve Magic: Zeroing',
    // total dmg
    vuln: 'My Dreams Will Come True',
    // vuln
    stack: 'Snowy Paw' // vip service stack
  }
};

var sakura = {
  name: 'Sakura',
  signet: 'Setsuna',
  regular: {
    spRestore: 'Bountiful Blossom: Ayame',
    // sp restore
    dmgTotal: 'Bountiful Blossom: Botan',
    // total dmg
    evasionAdd: 'Bountiful Blossom: Fuji',
    // +1 evasion, reduce cd
    evasionReset: 'Bountiful Blossom: Kiku',
    // reset evasion
    vuln: 'Bountiful Blossom: Koyo',
    // vuln
    speed: 'Bountiful Blossom: Ume' // atk & move speed
  },

  nexus1: {
    name: 'Setsuna Blade: Sakura ni Maku (Nexus)',
    cd: 'Setsuna Blade: Ame-Shiko',
    // reset ult & weap cd
    pause: 'Setsuna Blade: Ino-Shika-Cho',
    // pause sakura screen dur
    ice: 'Setsuna Blade: Tsukimi-de Ippai' // adaptive dmg
  },

  nexus2: {
    name: 'Setsuna Blade: Yasha (Nexus)',
    cd: 'Setsuna Blade: Mugenjigoku',
    // reduce evasion cd
    ice: 'Setsuna Blade: Mumyo',
    // adaptive dmg
    evasionIce: 'Setsuna Blade: Shinra Bansho' // adaptive dmg
  }
};

var su = {
  name: 'Su',
  signet: 'Bodhi',
  regular: {
    combo25: 'Motto of Asavakkhaya',
    // 25 combo
    spRestore: 'Motto of Ceto-Pariya-Nana',
    // sp restore
    vuln: 'Motto of Dibba-Cakkhu',
    // vuln
    dmgReduc: 'Motto of Dibba-Sota',
    // dmg reduc
    combo60: 'Motto of Iddhi-Vidha',
    // 60 combo
    dmgTotal: 'Motto of Pubbe-Nivasanussati' // total dmg
  },

  nexus1: {
    name: 'Maxim of Bodhi (Nexus)',
    vuln: 'Maxim of Anatman',
    // vuln
    breachPhysEle: 'Maxim of Anitya',
    // phys ele breach
    dmgShield: 'Maxim of Santam' // bonus dmg to shield and unshielded
  },

  nexus2: {
    name: 'Dictum of Bodhi (Nexus)',
    vuln: 'Dictum of Anatman',
    // vuln
    dmgBonus: 'Dictum of Anitya',
    // adaptive dmg per debuff
    debuff: 'Dictum of Santam' // random debuff
  }
};

var vv = {
  name: 'Vill-V',
  signet: 'Helix',
  regular: {
    dmgWeap: 'Act I: Magic',
    // weap dmg
    vuln: 'Act II: Pendulum',
    // vuln
    dmgTotal: 'Act III: Conflict',
    // total dmg
    dmgPhysEle: 'Act IV: Spoon',
    // phys ele dmg
    dmgRanged: 'Act V: Spider Web',
    // ranged dmg
    spRestore: 'Act VI: Sneer' // sp restore & weap cd
  },

  nexus1: {
    name: 'Interlude: Reversed Spiral (Nexus)',
    blades: 'Act VII: Half-Closed Door',
    // blades/phys dmg
    breachPhys: 'Act VIII: Adorned Chamber',
    // phys breach
    dmgShield: 'Finale: Broken Truth' // bonus dmg to shield
  },

  nexus2: {
    name: 'Intermezzo: Holistic Helix (Nexus)',
    breachPhysEle: 'Puppetry: Interlacing Cells',
    // phys ele breach
    vuln: 'Drama: Origin of Slumber',
    // vuln
    gravField: 'Saga: Overlapping Needles' // adaptive dmg
  }
};

// rough signet effect summaries
var damageDealt = [aponia.regular.basicAtk, eden.regular.dmgTotal, griseo.nexus1.purple, griseo.nexus2.green, hua.regular.dmgTotal, hua.nexus2.dmgTotal, kalpas.regular.dmgTotal, kevin.regular.dmgTotal, mobius.regular.dmgTotal, mobius.nexus1.dmgTotal, pardofelis.regular.dmgTotal, pardofelis.nexus2.dmgTotal, sakura.regular.dmgTotal, su.regular.dmgTotal, vv.regular.dmgTotal];
var damageTaken = [aponia.regular.dmgReduc, eden.regular.dmgReduc, hua.regular.dmgReduc, kalpas.regular.dmgReduc, mobius.regular.dmgReduc, su.regular.dmgReduc];
var physEleDamage = [aponia.nexus2.dmgPhysEle, eden.regular.dmgPhysEle, griseo.regular.black, kalpas.regular.dmgPhysEle, kosma.nexus1.dmgPhysEle, kosma.nexus2.dmgPhysEle, pardofelis.regular.dmgPhysEle, vv.regular.dmgPhysEle];
var physDamage = [hua.regular.dmgPhys, kevin.regular.dmgPhys];
var eleDamage = [hua.regular.dmgEle, kevin.regular.dmgEle];
var physEleBreach = [aponia.nexus1.breachPhysEle, aponia.nexus2.breachPhysEle, griseo.nexus1.orange, kalpas.nexus2.breachPhysEle, kosma.nexus1.breachPhysEle, kosma.nexus2.breachPhysEle, pardofelis.nexus1.breachPhysEle, vv.nexus2.breachPhysEle, su.nexus1.shieldDisable, mobius.nexus1.extend];
var physBreach = [hua.regular.breachPhys, kevin.regular.breachPhys, vv.nexus1.breachPhys];
var eleBreach = [hua.regular.breachEle, kevin.regular.breachEle];
var vurnerability = [aponia.regular.dmgTotal, aponia.nexus2.vuln, eden.nexus1.vuln, griseo.regular.red, griseo.regular.yellow, kalpas.regular.vuln, kevin.nexus2.ignoreRes, mobius.regular.vuln, pardofelis.nexus2.vuln, sakura.regular.vuln, su.regular.vuln, su.nexus2.vuln, vv.regular.vuln, vv.nexus2.vuln, su.nexus1.enemyDmg, kosma.nexus1.vuln];
var spRecovery = [aponia.regular.spRestore, eden.regular.spRestoreAtk, eden.regular.spRestore, eden.nexus1.spRestore, eden.nexus2.spCapRestore, griseo.regular.white, kalpas.regular.spRestore, kevin.regular.spRestore, sakura.regular.spRestore, su.regular.spRestore, kosma.regular.spRestore];
var adaptiveDamaage = [eden.nexus1.lightning, eden.nexus2.vuln, kalpas.nexus1.fire, sakura.nexus1.ice, sakura.nexus2.evasionIce, sakura.nexus2.ice, vv.nexus2.gravField];
var bonusDamage = [griseo.nexus1.green, kalpas.nexus2.dmgBonus, su.nexus2.dmgBonus];
var normalSignetCap = [hua.nexus1.stackEffect, hua.nexus2.stackCap];
var normalSignetBuff = [kevin.nexus1.effect, kevin.nexus2.effect];
var elfUltSuppValkCD = [mobius.regular.cdReduc, mobius.nexus1.reduce];
var ultimateEvasion = [kosma.regular.evasion, pardofelis.nexus1.evasion];
var ultBonusDamage = [kosma.regular.ult, pardofelis.nexus1.ult];
var damageShields = [su.nexus1.dmgShield, kosma.regular.dmgShield, vv.nexus1.dmgShield];
var signetSummary = [{
  signets: damageDealt,
  summary: 'Total Damage Dealt'
}, {
  signets: damageTaken,
  summary: 'Total Damage Taken'
}, {
  signets: physEleDamage,
  summary: 'Physical & Elemental Damage'
}, {
  signets: physDamage,
  summary: 'Physical Damage'
}, {
  signets: eleDamage,
  summary: 'Elemental Damage'
}, {
  signets: physEleBreach,
  summary: 'Physical & Elemental Breach'
}, {
  signets: physBreach,
  summary: 'Physical Breach'
}, {
  signets: eleBreach,
  summary: 'Elemental Breach'
}, {
  signets: vurnerability,
  summary: 'Damage Taken By Enemies'
}, {
  signets: spRecovery,
  summary: 'SP Recovery'
}, {
  signets: adaptiveDamaage,
  summary: 'Adaptive Damage'
}, {
  signets: bonusDamage,
  summary: 'Bonus Damage'
}, {
  signets: normalSignetCap,
  summary: 'Increase Normal Signet Cap Increased'
}, {
  signets: normalSignetBuff,
  summary: 'Normal Signets Increased Buff'
}, {
  signets: elfUltSuppValkCD,
  summary: 'Elf Ultimate and Support Valk Skill Reduced CD'
}, {
  signets: ultimateEvasion,
  summary: 'Ultimate Evasion Trigger Bonus Damage'
}, {
  signets: ultBonusDamage,
  summary: 'Ultimate Trigger Bonus Damage'
}, {
  signets: damageShields,
  summary: 'Bonus Damage to Shields'
}, {
  signets: aponia.regular.dmgPhysEle,
  summary: 'Increase Ultimate Physical & Elemental Damage'
}, {
  signets: aponia.regular.vuln,
  summary: 'Start With More Exhortation'
}, {
  signets: aponia.nexus1.limit,
  summary: 'Fixed Exhortation Value'
}, {
  signets: aponia.nexus1.dmgUlt,
  summary: 'Increase Ultimate Total Damage'
}, {
  signets: eden.regular.spCapInitial,
  summary: 'Initial and SP Cap Increased'
}, {
  signets: kosma.regular.atk,
  summary: 'Basic/Combo/Charged ATKs Trigger Bonus Damage'
}, {
  signets: kosma.regular.extend,
  summary: 'Longer Rend'
}, {
  signets: griseo.regular.blue,
  summary: 'Reduce Enemy Damage and Movement'
}, {
  signets: griseo.regular.grey,
  summary: 'Longer Taint'
}, {
  signets: griseo.nexus2.orange,
  summary: 'Reduce Enemy Resist'
}, {
  signets: griseo.nexus2.purple,
  summary: 'Increase Color Effect'
}, {
  signets: hua.nexus1.stackInitial,
  summary: 'Additional Initial Stack of Soldier\'s Resolve'
}, {
  signets: hua.nexus1.stackRegen,
  summary: 'Bonus Resolve Stack per Second to Normal Signets'
}, {
  signets: hua.nexus2.extend,
  summary: 'Extends Incincibility From Soldier\'s Remembrance'
}, {
  signets: kalpas.regular.hp,
  summary: 'Max HP Increase'
}, {
  signets: kalpas.nexus1.bbRecharge,
  summary: 'Losing HP Recharges Blood Boil '
}, {
  signets: kalpas.nexus1.dmgBonus,
  summary: 'More BB Damage to Higher HP% Enemies'
}, {
  signets: kalpas.nexus2.absorb,
  summary: 'BA Absorb Damage Equal to % of Charges'
}, {
  signets: kevin.nexus1.burst,
  summary: 'Total Damage Increase in Burst Mode'
}, {
  signets: kevin.nexus1.dur,
  summary: 'Final Battle and Normal Signet Duration Extended'
}, {
  signets: kevin.nexus2.dmgTotal,
  summary: 'Total Damage Increase in Ultimate or Burst Mode Hit'
}, {
  signets: kosma.nexus2.hpRestore,
  summary: 'Combo/Charged ATKs Deal Adaptive Damage & Restore HP'
}, {
  signets: mobius.regular.dmgEntity,
  summary: 'Entity Damage Dealt'
}, {
  signets: mobius.regular.elfSp,
  summary: 'Elf SP Recovery'
}, {
  signets: pardofelis.regular.spHpCap,
  summary: 'HP and SP Cap'
}, {
  signets: pardofelis.regular.spHpRestore,
  summary: 'HP and SP Recovery'
}, {
  signets: pardofelis.regular.curr,
  summary: 'Shiny Silver Increase Each Floor'
}, {
  signets: pardofelis.regular.currKill,
  summary: 'Shiny Silver Each Kill '
}, {
  signets: pardofelis.nexus2.stack,
  summary: 'VIP Service Stack Duration'
}, {
  signets: sakura.regular.speed,
  summary: 'Attack Speed & Move Speed'
}, {
  signets: sakura.regular.evasionReset,
  summary: 'Ultimate Evasion Reset CD'
}, {
  signets: sakura.regular.evasionAdd,
  summary: 'Ultimate Evasion 1 More Charge and Reduced CD'
}, {
  signets: sakura.nexus1.cd,
  summary: 'Sakura Screen Resets Ultimate and Weapon CD'
}, {
  signets: sakura.nexus1.pause,
  summary: 'Sakura Screen Pause Duration'
}, {
  signets: sakura.nexus2.cd,
  summary: 'Reduce Ultimate Evasion Remaining CD'
}, {
  signets: su.regular.combo60,
  summary: 'Combo Increased to 60 When Below 60'
}, {
  signets: su.regular.combo25,
  summary: '25 Bonus Combo'
}, {
  signets: su.nexus2.debuff,
  summary: '3 Random Debuffs on Hit'
}, {
  signets: vv.regular.dmgWeap,
  summary: 'Weapon Bonus Damage'
}, {
  signets: vv.regular.dmgRanged,
  summary: 'Ranged Total Damage'
}, {
  signets: vv.regular.spRestore,
  summary: 'SP Recovery and Reduce Weapon CD'
}, {
  signets: vv.nexus1.blades,
  summary: 'Marvelous Magic Deals Bonus ATK'
}];

/***/ }),

/***/ "./src/scripts/guide.ts":
/*!******************************!*\
  !*** ./src/scripts/guide.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   valks: () => (/* binding */ valks),
/* harmony export */   valksLength: () => (/* binding */ valksLength)
/* harmony export */ });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./src/scripts/data.ts");
var _exclusive, _main, _secondary, _exclusive2, _main2, _exclusive3, _main3, _secondary3, _exclusive4, _secondary4, _exclusive5, _secondary5, _exclusive6, _main6, _secondary6, _exclusive7, _secondary7, _exclusive8, _main8, _secondary8, _exclusive9, _main9, _optional4, _exclusive10, _secondary10, _exclusive11, _secondary11, _exclusive12, _optional6, _exclusive13, _main13, _secondary13, _exclusive14, _main14, _secondary14, _exclusive15, _secondary15, _exclusive16, _secondary16, _exclusive17, _secondary17, _exclusive18, _secondary18, _exclusive19, _secondary19, _exclusive20, _secondary20, _exclusive21, _main21, _secondary21, _exclusive22, _secondary22, _exclusive23, _main23, _secondary23, _exclusive24, _main24, _secondary24, _exclusive25, _secondary25, _exclusive26, _main26, _secondary26, _exclusive27, _secondary27, _exclusive28, _secondary28, _exclusive29, _secondary29, _exclusive30, _secondary30, _exclusive31, _secondary31, _exclusive32, _main32, _secondary32, _exclusive33, _main33, _secondary33, _exclusive34, _secondary34, _exclusive35, _secondary35, _exclusive36, _secondary36, _exclusive37, _secondary37, _exclusive38, _secondary38, _exclusive39, _secondary39, _optional22, _exclusive40, _secondary40, _exclusive41, _main41, _secondary41, _exclusive42, _secondary42, _exclusive43, _main43, _secondary43, _exclusive44, _secondary44, _exclusive45, _secondary45, _optional24;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// Argent Knight: Artemis
var aka = {
  name: 'Argent Knight: Artemis',
  acr: 'aka',
  version: '6.1',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.memory, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou],
    // early
    [_data__WEBPACK_IMPORTED_MODULE_0__.forbiddenSeed, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos],
    // mid
    [_data__WEBPACK_IMPORTED_MODULE_0__.ruinedLegacy, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos] // late
    ],

    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]],
    // utility
    [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.hb]] // damage
    ],

    gear: [
    // weapon, T, M, B
    [_data__WEBPACK_IMPORTED_MODULE_0__.skth, _data__WEBPACK_IMPORTED_MODULE_0__.wilt, _data__WEBPACK_IMPORTED_MODULE_0__.wilm, _data__WEBPACK_IMPORTED_MODULE_0__.wilb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.anat, _data__WEBPACK_IMPORTED_MODULE_0__.anam, _data__WEBPACK_IMPORTED_MODULE_0__.anab]],
    signetTable: {
      exclusive: (_exclusive = {}, _defineProperty(_exclusive, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Frost Scythe']), _defineProperty(_exclusive, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Stellar Trials', 'Winter Harvest']), _defineProperty(_exclusive, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Cold Moon']), _defineProperty(_exclusive, _data__WEBPACK_IMPORTED_MODULE_0__.reinforcement, ['Uranian Mirror']), _exclusive),
      main: (_main = {}, _defineProperty(_main, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _defineProperty(_main, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.reduce]), _defineProperty(_main, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle]), _main),
      secondary: (_secondary = {}, _defineProperty(_secondary, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.orange]), _defineProperty(_secondary, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name]), _secondary)
    }
  }]
};
// Disciplinary Perdition
var aponia = {
  name: 'Disciplinary Perdition',
  acr: 'aponia',
  version: '6.5',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][1], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][4]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.ruinedLegacy, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.hb, _data__WEBPACK_IMPORTED_MODULE_0__.sn]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.loco, _data__WEBPACK_IMPORTED_MODULE_0__.zent, _data__WEBPACK_IMPORTED_MODULE_0__.zenm, _data__WEBPACK_IMPORTED_MODULE_0__.zenb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.hant, _data__WEBPACK_IMPORTED_MODULE_0__.hanm, _data__WEBPACK_IMPORTED_MODULE_0__.hanb]],
    signetTable: {
      exclusive: (_exclusive2 = {}, _defineProperty(_exclusive2, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Admonition', 'Shelter']), _defineProperty(_exclusive2, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Inclusiveness']), _defineProperty(_exclusive2, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Atonement', 'Rescue']), _exclusive2),
      main: (_main2 = {}, _defineProperty(_main2, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _defineProperty(_main2, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.green, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple]), _defineProperty(_main2, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _main2),
      secondary: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln])
    },
    notes: "Can pick Eden's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, "</span> to speed up rotations.")
  }]
};
// Bright Knight: Excelsis
var bke = {
  name: 'Bright Knight: Excelsis',
  acr: 'bke',
  version: '5.9',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.forgetMeNot, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.stainedSakura, _data__WEBPACK_IMPORTED_MODULE_0__.tsukimiHimiko]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.sn], [_data__WEBPACK_IMPORTED_MODULE_0__.le]], [[_data__WEBPACK_IMPORTED_MODULE_0__.sa], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.abfl, _data__WEBPACK_IMPORTED_MODULE_0__.dant, _data__WEBPACK_IMPORTED_MODULE_0__.danm, _data__WEBPACK_IMPORTED_MODULE_0__.danb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.dirt, _data__WEBPACK_IMPORTED_MODULE_0__.dirm, _data__WEBPACK_IMPORTED_MODULE_0__.dirb]],
    signetTable: {
      exclusive: (_exclusive3 = {}, _defineProperty(_exclusive3, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Gambit']), _defineProperty(_exclusive3, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Glory']), _defineProperty(_exclusive3, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Paragon']), _defineProperty(_exclusive3, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Formation', 'Holy Lance']), _exclusive3),
      main: (_main3 = {}, _defineProperty(_main3, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus1.cd]), _defineProperty(_main3, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.white, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.green, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple]), _main3),
      secondary: (_secondary3 = {}, _defineProperty(_secondary3, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.breachPhysEle]), _defineProperty(_secondary3, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.breachPhysEle]), _defineProperty(_secondary3, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _secondary3)
    },
    notes: "<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus1.cd, "</p>If don't have <span>Blessing of Paragon</span>.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, "</p>Minimum of +2 upgrade.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.breachPhysEle, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.breachPhysEle, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>If lacking impair.")
  }]
};
// Sweet 'n' Spicy
var carole = {
  name: 'Sweet \'n\' Spicy',
  acr: 'carole',
  version: '6.6',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][7]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.itWillBeWritten], [_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.homeTown], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.homeTown]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.sa]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.obdo, _data__WEBPACK_IMPORTED_MODULE_0__.biat, _data__WEBPACK_IMPORTED_MODULE_0__.biam, _data__WEBPACK_IMPORTED_MODULE_0__.biab], [_data__WEBPACK_IMPORTED_MODULE_0__.miki, _data__WEBPACK_IMPORTED_MODULE_0__.pagt, _data__WEBPACK_IMPORTED_MODULE_0__.pagm, _data__WEBPACK_IMPORTED_MODULE_0__.pagb]],
    signetTable: {
      exclusive: (_exclusive4 = {}, _defineProperty(_exclusive4, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Revolution']), _defineProperty(_exclusive4, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Brake', 'Impulse', 'Rupture', 'Skyfall']), _exclusive4),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.dmgBonus]),
      secondary: (_secondary4 = {}, _defineProperty(_secondary4, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect]), _defineProperty(_secondary4, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus2.name]), _defineProperty(_secondary4, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.name]), _defineProperty(_secondary4, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary4)
    },
    notes: "Can pick Griseo's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, "</span> as reinforcement.")
  }]
};
// Chrono Navi
var cn = {
  name: 'Chrono Navi',
  acr: 'cn',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.heavyAsAMillionLives, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.rudr, _data__WEBPACK_IMPORTED_MODULE_0__.chrt, _data__WEBPACK_IMPORTED_MODULE_0__.chrm, _data__WEBPACK_IMPORTED_MODULE_0__.chrb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.ragt, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.ragb]],
    signetTable: {
      exclusive: (_exclusive5 = {}, _defineProperty(_exclusive5, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Succession']), _defineProperty(_exclusive5, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Time Crystal']), _defineProperty(_exclusive5, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Bladepiece']), _defineProperty(_exclusive5, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Constant', 'Final Dream']), _exclusive5),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgWeap, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln]),
      secondary: (_secondary5 = {}, _defineProperty(_secondary5, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary5, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _defineProperty(_secondary5, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spRestoreAtk, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name]), _secondary5),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield])
    },
    notes: "<p>1st Shop Emblem</p>Pseudo Miracle or Light as a Bodhi Leaf.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.gravField, "</p>Don't pick.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</p>Buy ASAP if in shop.")
  }]
};
// Dea Anchora
var da = {
  name: 'Dea Anchora',
  acr: 'da',
  version: '6.4',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][1], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][2]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br, _data__WEBPACK_IMPORTED_MODULE_0__.ma]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.saas, _data__WEBPACK_IMPORTED_MODULE_0__.shat, _data__WEBPACK_IMPORTED_MODULE_0__.sham, _data__WEBPACK_IMPORTED_MODULE_0__.shab], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.aslt, _data__WEBPACK_IMPORTED_MODULE_0__.aslm, _data__WEBPACK_IMPORTED_MODULE_0__.aslb]],
    signetTable: {
      exclusive: (_exclusive6 = {}, _defineProperty(_exclusive6, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Stars']), _defineProperty(_exclusive6, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Sheen']), _defineProperty(_exclusive6, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Halo']), _defineProperty(_exclusive6, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Brilliance', 'Gale']), _exclusive6),
      main: (_main6 = {}, _defineProperty(_main6, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name]), _defineProperty(_main6, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _main6),
      secondary: (_secondary6 = {}, _defineProperty(_secondary6, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.spCapRestore]), _defineProperty(_secondary6, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _defineProperty(_secondary6, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary6)
    },
    notes: "Can pick Kalpas's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, "</span> as reinforcement.")
  }]
};
// Dreamweaver
var dw = {
  name: 'Dreamweaver',
  acr: 'dw',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '2']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.farawayShip, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.ss]]],
    signetTable: {
      exclusive: (_exclusive7 = {}, _defineProperty(_exclusive7, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Thousand Thoughts']), _defineProperty(_exclusive7, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Forms']), _defineProperty(_exclusive7, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Oneiromancy']), _defineProperty(_exclusive7, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Absoluteness', 'Legacy']), _exclusive7),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect]),
      secondary: (_secondary7 = {}, _defineProperty(_secondary7, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name]), _defineProperty(_secondary7, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.curr, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.currKill, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _defineProperty(_secondary7, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus2.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus2.extend]), _secondary7),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.name])
    },
    notes: "Can pick Griseo's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, "</span>, or Eden's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span> as reinforcement.")
  }]
};
// Golden Diva
var eden = {
  name: 'Golden Diva',
  acr: 'eden',
  version: '6.6',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][8]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.goldGoblet, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.fragileFriend, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.br, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.doin, _data__WEBPACK_IMPORTED_MODULE_0__.hant, _data__WEBPACK_IMPORTED_MODULE_0__.hanm, _data__WEBPACK_IMPORTED_MODULE_0__.hanb], [_data__WEBPACK_IMPORTED_MODULE_0__.ecpa, _data__WEBPACK_IMPORTED_MODULE_0__.zent, _data__WEBPACK_IMPORTED_MODULE_0__.linm, _data__WEBPACK_IMPORTED_MODULE_0__.zenb]],
    signetTable: {
      exclusive: (_exclusive8 = {}, _defineProperty(_exclusive8, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Arioso', 'Symphony']), _defineProperty(_exclusive8, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Cadenza', 'Conerto', 'Fugue']), _exclusive8),
      main: (_main8 = {}, _defineProperty(_main8, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.vuln]), _defineProperty(_main8, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.dmgPhysEle]), _main8),
      secondary: (_secondary8 = {}, _defineProperty(_secondary8, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary8, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _defineProperty(_secondary8, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _secondary8)
    },
    notes: "Can pick Aponias's nexus <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, "</span> as reinforcement.")
  }]
};
// Miss Pink Elf
var elysia = {
  name: 'Miss Pink Elf♪',
  acr: 'elysia',
  version: '6.3',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][0], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][0], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][0]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.br, _data__WEBPACK_IMPORTED_MODULE_0__.ss]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.whpa, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.elym, _data__WEBPACK_IMPORTED_MODULE_0__.elyb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.biat, _data__WEBPACK_IMPORTED_MODULE_0__.biam, _data__WEBPACK_IMPORTED_MODULE_0__.biab]],
    signetTable: {
      exclusive: (_exclusive9 = {}, _defineProperty(_exclusive9, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Purity', 'Zenith']), _defineProperty(_exclusive9, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Beauty']), _defineProperty(_exclusive9, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Benevolence', 'Love']), _exclusive9),
      main: (_main9 = {}, _defineProperty(_main9, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.gravField]), _defineProperty(_main9, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgReduc, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _main9),
      secondary: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red]),
      optional: (_optional4 = {}, _defineProperty(_optional4, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus2.name]), _defineProperty(_optional4, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln]), _optional4)
    },
    notes: "Can pick Eden's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span> and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span> as reinforcment, but should als pick Su's signet <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, "</span> as well.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, "</p>Fully upgrade.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>Priority.")
  }]
};
// Prinzessin der Verurteilung
var fischl = {
  name: 'Prinzessin der Verurteilung',
  acr: 'fischl',
  version: '6.5',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][5], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.memory, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.ruinedLegacy, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.whpa, _data__WEBPACK_IMPORTED_MODULE_0__.want, _data__WEBPACK_IMPORTED_MODULE_0__.wanm, _data__WEBPACK_IMPORTED_MODULE_0__.wanb], [_data__WEBPACK_IMPORTED_MODULE_0__.miwa, _data__WEBPACK_IMPORTED_MODULE_0__.hant, _data__WEBPACK_IMPORTED_MODULE_0__.hanm, _data__WEBPACK_IMPORTED_MODULE_0__.hanb]],
    signetTable: {
      exclusive: (_exclusive10 = {}, _defineProperty(_exclusive10, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Midnight']), _defineProperty(_exclusive10, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Retrtibution']), _defineProperty(_exclusive10, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Fate']), _defineProperty(_exclusive10, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Dark Wings', 'Nightfall']), _exclusive10),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]),
      secondary: (_secondary10 = {}, _defineProperty(_secondary10, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _defineProperty(_secondary10, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey]), _defineProperty(_secondary10, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus2.name]), _secondary10),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name])
    },
    notes: "Can pick Kalpas's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, "</span>, and Su signets as reinforcement.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>Priority.")
  }]
};
// Fallen Rosemary
var fr = {
  name: 'Fallen Rosemary',
  acr: 'fr',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.heavyAsAMillionLives, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.irhe, _data__WEBPACK_IMPORTED_MODULE_0__.hant, _data__WEBPACK_IMPORTED_MODULE_0__.hanm, _data__WEBPACK_IMPORTED_MODULE_0__.hanb], [_data__WEBPACK_IMPORTED_MODULE_0__.irhe, _data__WEBPACK_IMPORTED_MODULE_0__.iret, _data__WEBPACK_IMPORTED_MODULE_0__.irem, _data__WEBPACK_IMPORTED_MODULE_0__.ireb]],
    signetTable: {
      exclusive: (_exclusive11 = {}, _defineProperty(_exclusive11, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Valfreyja']), _defineProperty(_exclusive11, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Nocturne']), _defineProperty(_exclusive11, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['God Eater']), _defineProperty(_exclusive11, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Soul Siphon', 'Spirit Servants']), _exclusive11),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect]),
      secondary: (_secondary11 = {}, _defineProperty(_secondary11, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary11, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _defineProperty(_secondary11, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name]), _defineProperty(_secondary11, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary11)
    },
    notes: "<p>16F Emblem</p>Heavy as a Million Lives or Ruined Legacy.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, "</p>Upgrade to max.")
  }]
};
// Fervent Tempo
var mc = {
  name: 'Fervent Tempo',
  acr: 'mc',
  version: '6.2',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.farawayShip, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.dp, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.sldr, _data__WEBPACK_IMPORTED_MODULE_0__.mict, _data__WEBPACK_IMPORTED_MODULE_0__.danm, _data__WEBPACK_IMPORTED_MODULE_0__.micb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.danm, _data__WEBPACK_IMPORTED_MODULE_0__.elyb]],
    signetTable: {
      exclusive: (_exclusive12 = {}, _defineProperty(_exclusive12, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Silence']), _defineProperty(_exclusive12, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Mixing']), _defineProperty(_exclusive12, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Fervor']), _defineProperty(_exclusive12, _data__WEBPACK_IMPORTED_MODULE_0__.reinforcement, ['Solitude']), _defineProperty(_exclusive12, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Thorns']), _exclusive12),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.white, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.green, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple]),
      secondary: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]),
      optional: (_optional6 = {}, _defineProperty(_optional6, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name]), _defineProperty(_optional6, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name]), _defineProperty(_optional6, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _optional6)
    },
    notes: "Can pick Su/Sakura signets as reinforcement.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, "</p>Upgrade twice.")
  }]
};
// Goushinnso Memento
var gm = {
  name: 'Goushinnso Memento',
  acr: 'gm',
  version: '6.0',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.fragileFriend, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.memory, _data__WEBPACK_IMPORTED_MODULE_0__.homeTown], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.homeTown]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.sn]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.hb]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.frna, _data__WEBPACK_IMPORTED_MODULE_0__.anat, _data__WEBPACK_IMPORTED_MODULE_0__.anam, _data__WEBPACK_IMPORTED_MODULE_0__.anab], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.bast, _data__WEBPACK_IMPORTED_MODULE_0__.basm, _data__WEBPACK_IMPORTED_MODULE_0__.basb]],
    signetTable: {
      exclusive: (_exclusive13 = {}, _defineProperty(_exclusive13, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Flourish', 'Whiteout']), _defineProperty(_exclusive13, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Frozen Cloud', 'Haste', 'Icy Sakura']), _exclusive13),
      main: (_main13 = {}, _defineProperty(_main13, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.hpRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.breachPhysEle]), _defineProperty(_main13, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _main13),
      secondary: (_secondary13 = {}, _defineProperty(_secondary13, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary13, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name]), _defineProperty(_secondary13, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name]), _secondary13)
    }
  }]
};
// Starry Impression
var griseo = {
  name: 'Starry Impression',
  acr: 'griseo',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.fragileFriend, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.sa, _data__WEBPACK_IMPORTED_MODULE_0__.ss]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.elas, _data__WEBPACK_IMPORTED_MODULE_0__.cezt, _data__WEBPACK_IMPORTED_MODULE_0__.cezm, _data__WEBPACK_IMPORTED_MODULE_0__.cezb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.danm, _data__WEBPACK_IMPORTED_MODULE_0__.elyb]],
    signetTable: {
      exclusive: (_exclusive14 = {}, _defineProperty(_exclusive14, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['River Forest', 'Starry Night']), _defineProperty(_exclusive14, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Cloud Valley']), _defineProperty(_exclusive14, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Azure Wind', 'Feathers']), _exclusive14),
      main: (_main14 = {}, _defineProperty(_main14, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus1.vuln]), _defineProperty(_main14, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.fire]), _main14),
      secondary: (_secondary14 = {}, _defineProperty(_secondary14, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.cdReduc, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.breachPhysEle]), _defineProperty(_secondary14, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _secondary14),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name])
    }
  }]
};
// Herrscher of Finality
var hofi = {
  name: 'Herrscher of Finality',
  acr: 'hofi',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][9]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.vke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ma, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    signetTable: {
      exclusive: (_exclusive15 = {}, _defineProperty(_exclusive15, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Finale Moon']), _defineProperty(_exclusive15, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Rift']), _defineProperty(_exclusive15, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Clarity']), _defineProperty(_exclusive15, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Condescension', 'High Flames']), _exclusive15),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle]),
      secondary: (_secondary15 = {}, _defineProperty(_secondary15, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _defineProperty(_secondary15, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name]), _defineProperty(_secondary15, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary15),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name])
    },
    notes: "Can pick Vill-V's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, "</span> as reinforcement.")
  }]
};
// Herrscher of Flamescion
var hofs = {
  name: 'Herrscher of Flamescion',
  acr: 'hofs',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.anOldPalsLegacy], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.tsukimiHimiko]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.vke, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.doin, _data__WEBPACK_IMPORTED_MODULE_0__.murt, _data__WEBPACK_IMPORTED_MODULE_0__.murm, _data__WEBPACK_IMPORTED_MODULE_0__.murb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.leet, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.leeb]],
    signetTable: {
      exclusive: (_exclusive16 = {}, _defineProperty(_exclusive16, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Heatflow']), _defineProperty(_exclusive16, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Starfire']), _defineProperty(_exclusive16, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Tempered Warrior', 'Reburn']), _defineProperty(_exclusive16, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Flamescion']), _exclusive16),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.fire, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.dmgBonus]),
      secondary: (_secondary16 = {}, _defineProperty(_secondary16, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name]), _defineProperty(_secondary16, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus1.name]), _defineProperty(_secondary16, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _defineProperty(_secondary16, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary16)
    }
  }]
};
// Herrscher of Human: Ego
var hoh = {
  name: 'Herrscher of Human: Ego',
  acr: 'hoh',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.anOldPalsLegacy], [_data__WEBPACK_IMPORTED_MODULE_0__.feastOfEmptiness, _data__WEBPACK_IMPORTED_MODULE_0__.anOldPalsLegacy], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.vc, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.doeg, _data__WEBPACK_IMPORTED_MODULE_0__.elpt, _data__WEBPACK_IMPORTED_MODULE_0__.elpm, _data__WEBPACK_IMPORTED_MODULE_0__.elpb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.wilt, _data__WEBPACK_IMPORTED_MODULE_0__.wilm, _data__WEBPACK_IMPORTED_MODULE_0__.wilb]],
    signetTable: {
      exclusive: (_exclusive17 = {}, _defineProperty(_exclusive17, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['First Bloom', 'First Journey']), _defineProperty(_exclusive17, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['First Awakening']), _defineProperty(_exclusive17, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['First Encounter', 'First Yearning']), _exclusive17),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.fire]),
      secondary: (_secondary17 = {}, _defineProperty(_secondary17, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.curr, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.currKill, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.ult]), _defineProperty(_secondary17, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus2.name]), _defineProperty(_secondary17, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _secondary17),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name])
    },
    notes: "Can pick Sakura's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, "</span> as reinforcement.")
  }]
};
// Herrscher of Origin
var hoo = {
  name: 'Herrscher of Origin',
  acr: 'hoo',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.heavyAsAMillionLives, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    signetTable: {
      exclusive: (_exclusive18 = {}, _defineProperty(_exclusive18, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Expungement']), _defineProperty(_exclusive18, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Lethal Smite']), _defineProperty(_exclusive18, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Ultra']), _defineProperty(_exclusive18, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Inscription']), _defineProperty(_exclusive18, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Nature']), _exclusive18),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgReduc, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]),
      secondary: (_secondary18 = {}, _defineProperty(_secondary18, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary18, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name]), _defineProperty(_secondary18, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.curr, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.currKill, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary18),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal])
    },
    notes: "Can pick Griseo's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, "</span>, or Eden's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span> as reinforcement.")
  }]
};
// Herrscher of Reason
var hor = {
  name: 'Herrscher of Reason',
  acr: 'hor',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.itWillBeWritten], [_data__WEBPACK_IMPORTED_MODULE_0__.forgetMeNot, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.heavyAsAMillionLives, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.sted, _data__WEBPACK_IMPORTED_MODULE_0__.wilt, _data__WEBPACK_IMPORTED_MODULE_0__.wilm, _data__WEBPACK_IMPORTED_MODULE_0__.wilb], [_data__WEBPACK_IMPORTED_MODULE_0__.dore, _data__WEBPACK_IMPORTED_MODULE_0__.welt, _data__WEBPACK_IMPORTED_MODULE_0__.welm, _data__WEBPACK_IMPORTED_MODULE_0__.welb]],
    signetTable: {
      exclusive: (_exclusive19 = {}, _defineProperty(_exclusive19, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Wisdon']), _defineProperty(_exclusive19, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Truth']), _defineProperty(_exclusive19, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Inspiration']), _defineProperty(_exclusive19, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Creation', 'Reason']), _exclusive19),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus2.effect]),
      secondary: (_secondary19 = {}, _defineProperty(_secondary19, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionReset, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus2.name]), _defineProperty(_secondary19, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary19, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _secondary19),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name])
    },
    notes: "Can pick Kalpas's signets, <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, "</span>, or Eden's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, "</span> as reinforcement.<br><br>\n\t\t\t\t\t<p>1st Shop Emblem</p>Forget-Me-Not or Light as a Bodhi Leaf.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</p>Buy if in shop.")
  }]
};
// Herrscher of Sentience
var hos = {
  name: 'Herrscher of Sentience',
  acr: 'hos',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.itWillBeWritten], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.ruinedLegacy, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.sa, _data__WEBPACK_IMPORTED_MODULE_0__.ss]]],
    signetTable: {
      exclusive: (_exclusive20 = {}, _defineProperty(_exclusive20, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Victory']), _defineProperty(_exclusive20, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Dark Plumes']), _defineProperty(_exclusive20, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Legion', 'Supremacy']), _defineProperty(_exclusive20, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Ego']), _exclusive20),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus2.name]),
      secondary: (_secondary20 = {}, _defineProperty(_secondary20, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary20, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _defineProperty(_secondary20, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name]), _secondary20),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name])
    },
    notes: "Can pick Kosma's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, "</span>, or Kalpas's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, "</span> as reinforcement.")
  }]
};
// Herrscher of the Void
var hov = {
  name: 'Herrscher of the Void',
  acr: 'hov',
  version: '6.6',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.forbiddenSeed, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos], [_data__WEBPACK_IMPORTED_MODULE_0__.farawayShip, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.vc, _data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.dovo, _data__WEBPACK_IMPORTED_MODULE_0__.sirt, _data__WEBPACK_IMPORTED_MODULE_0__.sirm, _data__WEBPACK_IMPORTED_MODULE_0__.sirb], [_data__WEBPACK_IMPORTED_MODULE_0__.kevo, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.elym, _data__WEBPACK_IMPORTED_MODULE_0__.elyb]],
    signetTable: {
      exclusive: (_exclusive21 = {}, _defineProperty(_exclusive21, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Innateness']), _defineProperty(_exclusive21, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Coleus']), _defineProperty(_exclusive21, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Annihilation', 'Law', 'Virtuality']), _exclusive21),
      main: (_main21 = {}, _defineProperty(_main21, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.blades, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.dmgShield]), _defineProperty(_main21, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.reduce]), _main21),
      secondary: (_secondary21 = {}, _defineProperty(_secondary21, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus1.name]), _defineProperty(_secondary21, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.lightning, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.vuln]), _secondary21),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name])
    },
    notes: "Can pick Griseo's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</span> (buy from shop), and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, "</span> as reinforcement.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.breachPhys, "</p>Priority.")
  }]
};
// Herrscher of Thunder
var hot = {
  name: 'Herrscher of Thunder',
  acr: 'hot',
  version: '6.6',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][8], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][7]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.itWillBeWritten], [_data__WEBPACK_IMPORTED_MODULE_0__.forbiddenSeed, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.ruinedLegacy, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.sena, _data__WEBPACK_IMPORTED_MODULE_0__.hant, _data__WEBPACK_IMPORTED_MODULE_0__.hanm, _data__WEBPACK_IMPORTED_MODULE_0__.hanb], [_data__WEBPACK_IMPORTED_MODULE_0__.seru, _data__WEBPACK_IMPORTED_MODULE_0__.bent, _data__WEBPACK_IMPORTED_MODULE_0__.benm, _data__WEBPACK_IMPORTED_MODULE_0__.benb]],
    signetTable: {
      exclusive: (_exclusive22 = {}, _defineProperty(_exclusive22, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Narukami']), _defineProperty(_exclusive22, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Tsukuyomi']), _defineProperty(_exclusive22, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Divine Penalty', 'Hazy Moon', 'Mitama']), _exclusive22),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect]),
      secondary: (_secondary22 = {}, _defineProperty(_secondary22, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.breachPhysEle]), _defineProperty(_secondary22, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary22, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary22, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult]), _secondary22)
    },
    notes: "Can pick Griseo's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</span>, Vill-V's signet <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, "</span>, Eden's signet <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, "</span>, or Sakura's signet <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, "</span> as reinforcement.<br><br>\n\t\t\t\t\t<p>16F Emblem</p>Can pick Dreamful Gold.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, "</p>Must take for 17F.")
  }]
};
// Herrscher of Truth
var hotr = {
  name: 'Herrscher of Truth',
  acr: 'hotr',
  version: '6.5',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][2], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][4]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.forbiddenSeed, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos], [_data__WEBPACK_IMPORTED_MODULE_0__.thornyCrown, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    signetTable: {
      exclusive: (_exclusive23 = {}, _defineProperty(_exclusive23, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Intellect Core']), _defineProperty(_exclusive23, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Genuine Solution']), _defineProperty(_exclusive23, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Continuation', 'Konstruktion', 'Vector']), _exclusive23),
      main: (_main23 = {}, _defineProperty(_main23, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.green, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple]), _defineProperty(_main23, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name]), _main23),
      secondary: (_secondary23 = {}, _defineProperty(_secondary23, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.ult]), _defineProperty(_secondary23, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _secondary23),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name])
    },
    notes: "Can pick Sakura's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, "</span> or Su signets as reinforcement.")
  }]
};
// Sugary Starburst
var kira = {
  name: 'Sugary Starburst',
  acr: 'kira',
  version: '6.7',
  builds: [{
    name: 'ult',
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][9]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.goldGoblet, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    signetTable: {
      exclusive: (_exclusive24 = {}, _defineProperty(_exclusive24, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Roller Dance']), _defineProperty(_exclusive24, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Acoustic Spectrum', 'Salute']), _defineProperty(_exclusive24, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Astral Path', 'Rhythm']), _exclusive24),
      main: (_main24 = {}, _defineProperty(_main24, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name]), _defineProperty(_main24, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.dur]), _main24),
      secondary: (_secondary24 = {}, _defineProperty(_secondary24, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary24, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary24),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow])
    },
    notes: "Can pick Aponia's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgTotal, "</span> as reinforcement.")
  }, {
    name: 'charge',
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][9]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.goldGoblet, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    signetTable: {
      exclusive: (_exclusive25 = {}, _defineProperty(_exclusive25, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Roller Dance']), _defineProperty(_exclusive25, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Acoustic Spectrum', 'Salute']), _defineProperty(_exclusive25, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Astral Path', 'Rhythm']), _exclusive25),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name]),
      secondary: (_secondary25 = {}, _defineProperty(_secondary25, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln]), _defineProperty(_secondary25, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary25, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus1.name]), _defineProperty(_secondary25, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red]), _secondary25)
    },
    notes: "<p>Kalpas</p>not recommended to pick damage boosts before 12F.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</p>Buy from shop.")
  }]
};
// Luna Kindred
var lk = {
  name: 'Luna Kindred',
  acr: 'lk',
  version: '5.9',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.sn], [_data__WEBPACK_IMPORTED_MODULE_0__.le]], [[_data__WEBPACK_IMPORTED_MODULE_0__.dp], [_data__WEBPACK_IMPORTED_MODULE_0__.le]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.heso, _data__WEBPACK_IMPORTED_MODULE_0__.drat, _data__WEBPACK_IMPORTED_MODULE_0__.dram, _data__WEBPACK_IMPORTED_MODULE_0__.drab], [_data__WEBPACK_IMPORTED_MODULE_0__.elas, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.murm, _data__WEBPACK_IMPORTED_MODULE_0__.elyb]],
    signetTable: {
      exclusive: (_exclusive26 = {}, _defineProperty(_exclusive26, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Penumbra']), _defineProperty(_exclusive26, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Blood Feast']), _defineProperty(_exclusive26, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Imprint']), _defineProperty(_exclusive26, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Immortality', 'Thirst']), _exclusive26),
      main: (_main26 = {}, _defineProperty(_main26, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.breachPhysEle]), _defineProperty(_main26, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _main26),
      secondary: (_secondary26 = {}, _defineProperty(_secondary26, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _defineProperty(_secondary26, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.ult]), _defineProperty(_secondary26, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal]), _secondary26)
    },
    notes: "If equipped with Hekate's Sombre, can buy Su signets.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>Recommended to upgrade.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, "</p>If using dracula set.")
  }]
};
// Infinite Ouroboros
var mobius = {
  name: 'Infinite Ouroboros',
  acr: 'mobius',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.forbiddenSeed, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos], [_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos], [_data__WEBPACK_IMPORTED_MODULE_0__.ruinedLegacy, _data__WEBPACK_IMPORTED_MODULE_0__.boundlessLogos]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.baim, _data__WEBPACK_IMPORTED_MODULE_0__.lint, _data__WEBPACK_IMPORTED_MODULE_0__.linm, _data__WEBPACK_IMPORTED_MODULE_0__.linb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.hant, _data__WEBPACK_IMPORTED_MODULE_0__.hanm, _data__WEBPACK_IMPORTED_MODULE_0__.hanb]],
    signetTable: {
      exclusive: (_exclusive27 = {}, _defineProperty(_exclusive27, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Ascension', 'Dark Assault']), _defineProperty(_exclusive27, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Ill Fortune']), _defineProperty(_exclusive27, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Mirage', 'Ravenousness']), _exclusive27),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.reduce]),
      secondary: (_secondary27 = {}, _defineProperty(_secondary27, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.purple, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.green]), _defineProperty(_secondary27, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name]), _defineProperty(_secondary27, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary27),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield])
    },
    notes: "Can pick Eden's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, "</span> to speed up rotations, and Sakura's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.vuln, "</span> as reinforcement.")
  }]
};
// Starchasm Nyx
var nyx = {
  name: 'Starchasm Nyx',
  acr: 'nyx',
  version: '6.1',
  builds: [{
    signet: {
      transitional: [[_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2']],
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.memory, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.hb]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.saun, _data__WEBPACK_IMPORTED_MODULE_0__.vert, _data__WEBPACK_IMPORTED_MODULE_0__.verm, _data__WEBPACK_IMPORTED_MODULE_0__.verb], [_data__WEBPACK_IMPORTED_MODULE_0__.saga, _data__WEBPACK_IMPORTED_MODULE_0__.wilt, _data__WEBPACK_IMPORTED_MODULE_0__.wilm, _data__WEBPACK_IMPORTED_MODULE_0__.wilb]],
    signetTable: {
      exclusive: (_exclusive28 = {}, _defineProperty(_exclusive28, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Frigidity']), _defineProperty(_exclusive28, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Toxic Bath']), _defineProperty(_exclusive28, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Abyssal Gaze', 'Cocoon Break']), _defineProperty(_exclusive28, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Nightmare']), _exclusive28),
      transitional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln]),
      secondary: (_secondary28 = {}, _defineProperty(_secondary28, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.name]), _defineProperty(_secondary28, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary28, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name]), _secondary28)
    },
    notes: "Can pick Sakura's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, "</span> and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.speed, "</span> as reinforcement.")
  }]
};
// Reveris Calico
var pardo = {
  name: 'Reverist Calico',
  acr: 'pardo',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][9]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.goldGoblet, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.heavyAsAMillionLives, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.puph, _data__WEBPACK_IMPORTED_MODULE_0__.brot, _data__WEBPACK_IMPORTED_MODULE_0__.wilm, _data__WEBPACK_IMPORTED_MODULE_0__.brob], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.bast, _data__WEBPACK_IMPORTED_MODULE_0__.basm, _data__WEBPACK_IMPORTED_MODULE_0__.basb]],
    signetTable: {
      exclusive: (_exclusive29 = {}, _defineProperty(_exclusive29, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Cat\'s Eyes', 'Hidden Claws']), _defineProperty(_exclusive29, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['the Tailpiece', 'Nighteye', 'Phantasma']), _exclusive29),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name]),
      secondary: (_secondary29 = {}, _defineProperty(_secondary29, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.dmgShield]), _defineProperty(_secondary29, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.curr, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.ult, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.breachPhysEle]), _defineProperty(_secondary29, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.fire]), _secondary29),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey])
    },
    notes: "Can pick Vill-V's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, "</span> as reinforcements.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</p>Buy from shop.")
  }]
};
// Palatinus Equinox
var pe = {
  name: 'Palatinus Equinox',
  acr: 'pe',
  version: '6.1',
  builds: [{
    signet: {
      transitional: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1']],
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.farawayShip, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.miat, _data__WEBPACK_IMPORTED_MODULE_0__.biat, _data__WEBPACK_IMPORTED_MODULE_0__.biam, _data__WEBPACK_IMPORTED_MODULE_0__.biab], [_data__WEBPACK_IMPORTED_MODULE_0__.miec, _data__WEBPACK_IMPORTED_MODULE_0__.mict, _data__WEBPACK_IMPORTED_MODULE_0__.danm, _data__WEBPACK_IMPORTED_MODULE_0__.micb]],
    signetTable: {
      exclusive: (_exclusive30 = {}, _defineProperty(_exclusive30, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Exodus']), _defineProperty(_exclusive30, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Abyssal Chant']), _defineProperty(_exclusive30, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Commitment', 'Equinox']), _defineProperty(_exclusive30, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Gallop']), _exclusive30),
      transitional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name]),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.green, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple]),
      secondary: (_secondary30 = {}, _defineProperty(_secondary30, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _defineProperty(_secondary30, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _defineProperty(_secondary30, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln]), _secondary30)
    },
    notes: "<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple, "</p>Priority.")
  }]
};
// Midnight Absinthe
var raven = {
  name: 'Midnight Absinthe',
  acr: 'raven',
  version: '5.9',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.goodOldDays, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.vc]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.obwi, _data__WEBPACK_IMPORTED_MODULE_0__.aslt, _data__WEBPACK_IMPORTED_MODULE_0__.aslm, _data__WEBPACK_IMPORTED_MODULE_0__.aslb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.leet, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.leeb]],
    signetTable: {
      exclusive: (_exclusive31 = {}, _defineProperty(_exclusive31, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Ominous Mist']), _defineProperty(_exclusive31, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Arrowhead']), _defineProperty(_exclusive31, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Raven Plume', 'Suppression', 'Wild Hunt']), _exclusive31),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.gravField]),
      secondary: (_secondary31 = {}, _defineProperty(_secondary31, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgReduc, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _defineProperty(_secondary31, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _defineProperty(_secondary31, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name]), _defineProperty(_secondary31, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus2.name]), _secondary31)
    },
    notes: "<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln, "</p>Priority.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>If lacking breach.<br><br>\n\t\t\t\t\t<p>Griseo</p>Buy signets in shop if possible.")
  }]
};
// Ritual Imayoh
var ri = {
  name: 'Ritual Imayoh',
  acr: 'ri',
  version: '5.9',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.homeTown]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.sn], [_data__WEBPACK_IMPORTED_MODULE_0__.le]], [[_data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.pobl, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.elym, _data__WEBPACK_IMPORTED_MODULE_0__.elyb], [_data__WEBPACK_IMPORTED_MODULE_0__.dovo, _data__WEBPACK_IMPORTED_MODULE_0__.mict, _data__WEBPACK_IMPORTED_MODULE_0__.danm, _data__WEBPACK_IMPORTED_MODULE_0__.micb]],
    signetTable: {
      exclusive: (_exclusive32 = {}, _defineProperty(_exclusive32, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Prosperity']), _defineProperty(_exclusive32, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Dawn']), _defineProperty(_exclusive32, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Blossom']), _defineProperty(_exclusive32, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Fertility', 'Torch']), _exclusive32),
      main: (_main32 = {}, _defineProperty(_main32, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _defineProperty(_main32, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name]), _main32),
      secondary: (_secondary32 = {}, _defineProperty(_secondary32, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _defineProperty(_secondary32, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus2.name]), _defineProperty(_secondary32, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary32)
    },
    notes: "<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>Priority.")
  }]
};
// Stygian Nymph
var sn = {
  name: 'Stygian Nymph',
  acr: 'sn',
  version: '5.9',
  builds: [{
    signet: {
      transitional: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '1']],
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.forgetMeNot, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.fragileFriend, _data__WEBPACK_IMPORTED_MODULE_0__.itWillBeWritten], [_data__WEBPACK_IMPORTED_MODULE_0__.stainedSakura, _data__WEBPACK_IMPORTED_MODULE_0__.tsukimiHimiko]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.sa, _data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.ss]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.paac, _data__WEBPACK_IMPORTED_MODULE_0__.biat, _data__WEBPACK_IMPORTED_MODULE_0__.biam, _data__WEBPACK_IMPORTED_MODULE_0__.biab], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.allt, _data__WEBPACK_IMPORTED_MODULE_0__.allm, _data__WEBPACK_IMPORTED_MODULE_0__.allb]],
    signetTable: {
      exclusive: (_exclusive33 = {}, _defineProperty(_exclusive33, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Vurnerable Duality']), _defineProperty(_exclusive33, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Intergrowth']), _defineProperty(_exclusive33, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Kindred', 'Might of Duality', 'Union']), _exclusive33),
      transitional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus1.name]),
      main: (_main33 = {}, _defineProperty(_main33, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.hpRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.dmgPhysEle]), _defineProperty(_main33, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgReduc, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.extend]), _main33),
      secondary: (_secondary33 = {}, _defineProperty(_secondary33, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]), _defineProperty(_secondary33, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _secondary33)
    },
    notes: "<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, "</p>If not SS.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.nexus2.breachPhysEle, "</p>Priority.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgReduc, "</p>Recommended to upgrade.")
  }]
};
// Spina Astera
var spa = {
  name: 'Spina Astera',
  acr: 'spa',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.becauseOfYou], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.vke], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.asdi, _data__WEBPACK_IMPORTED_MODULE_0__.ragt, _data__WEBPACK_IMPORTED_MODULE_0__.ragm, _data__WEBPACK_IMPORTED_MODULE_0__.ragb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.leet, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.leeb]],
    signetTable: {
      exclusive: (_exclusive34 = {}, _defineProperty(_exclusive34, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Wild Flare']), _defineProperty(_exclusive34, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Alrescha']), _defineProperty(_exclusive34, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Holy Flame', 'Star Quillon']), _defineProperty(_exclusive34, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Radiant Formation']), _exclusive34),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]),
      secondary: (_secondary34 = {}, _defineProperty(_secondary34, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary34, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _defineProperty(_secondary34, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _secondary34),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield])
    },
    notes: "Can pick Pardofelis's nexus <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name, "</span>, or Eden's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, "</span> as reinforcement.<br><br>\n\t\t\t\t\t<p>Start Emblem</p>The Lonely Moon or It Will Be Written.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name, "</p>Not recommended to unlock before 12F")
  }]
};
// Sixth Serenade
var ss = {
  name: 'Sixth Serenade',
  acr: 'ss',
  version: '6.3',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][0], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][0], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][0], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][0]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.sakura, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.forgetMeNot, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    signetTable: {
      exclusive: (_exclusive35 = {}, _defineProperty(_exclusive35, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Nocturnal Tides', 'Tragedy']), _defineProperty(_exclusive35, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Finale']), _defineProperty(_exclusive35, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Expiation', 'Raven Eye']), _exclusive35),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]),
      secondary: (_secondary35 = {}, _defineProperty(_secondary35, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.name, [_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.evasionAdd, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.sakura.nexus2.name]), _defineProperty(_secondary35, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.green, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.purple]), _defineProperty(_secondary35, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name]), _defineProperty(_secondary35, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln]), _secondary35)
    }
  }]
};
// Jade Knight
var sus = {
  name: 'Jade Knight',
  acr: 'sus',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.anOldPalsLegacy], [_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.anOldPalsLegacy], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.le, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.nost, _data__WEBPACK_IMPORTED_MODULE_0__.list, _data__WEBPACK_IMPORTED_MODULE_0__.lism, _data__WEBPACK_IMPORTED_MODULE_0__.lisb], [_data__WEBPACK_IMPORTED_MODULE_0__.codu, _data__WEBPACK_IMPORTED_MODULE_0__.wilt, _data__WEBPACK_IMPORTED_MODULE_0__.wilm, _data__WEBPACK_IMPORTED_MODULE_0__.wilb]],
    signetTable: {
      exclusive: (_exclusive36 = {}, _defineProperty(_exclusive36, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Great Blade']), _defineProperty(_exclusive36, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Cloudwalker']), _defineProperty(_exclusive36, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Jade Moon', 'Shaft', 'Smoky Waft']), _exclusive36),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus2.name]),
      secondary: (_secondary36 = {}, _defineProperty(_secondary36, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus2.name]), _defineProperty(_secondary36, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.blue, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.purple, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.orange]), _defineProperty(_secondary36, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary36),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name])
    },
    notes: "Can pick Kosma's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, "</span> and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, "</span> as reinforcement.")
  }]
};
// Shadow Knight
var sk = {
  name: 'Shadow Knight',
  acr: 'sk',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.fragileFriend, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.memory, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.fr]], [[_data__WEBPACK_IMPORTED_MODULE_0__.br], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.rc]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.nure, _data__WEBPACK_IMPORTED_MODULE_0__.zent, _data__WEBPACK_IMPORTED_MODULE_0__.zenm, _data__WEBPACK_IMPORTED_MODULE_0__.zenb]],
    signetTable: {
      exclusive: (_exclusive37 = {}, _defineProperty(_exclusive37, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Forces', 'Lunar Eclipse']), _defineProperty(_exclusive37, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Mindfulness']), _defineProperty(_exclusive37, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Form & Spirit', 'Six Fists']), _exclusive37),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]),
      secondary: (_secondary37 = {}, _defineProperty(_secondary37, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary37, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name]), _defineProperty(_secondary37, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.atk, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.extend]), _secondary37),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name])
    },
    notes: "Can pick Griseo's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</span>, Sakura's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.vulnerability, "</span>, <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, "</span>, or Eden's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span> as reinforcement.")
  }]
};
// Silverwing N-EX
var sw = {
  name: 'Silverwing N-EX',
  acr: 'sw',
  version: '6.4',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][1], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][3]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.su, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.memory, _data__WEBPACK_IMPORTED_MODULE_0__.outOfReach], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.vc, _data__WEBPACK_IMPORTED_MODULE_0__.br]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.fafl, _data__WEBPACK_IMPORTED_MODULE_0__.brot, _data__WEBPACK_IMPORTED_MODULE_0__.brom, _data__WEBPACK_IMPORTED_MODULE_0__.brob], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.elym, _data__WEBPACK_IMPORTED_MODULE_0__.elyb]],
    signetTable: {
      exclusive: (_exclusive38 = {}, _defineProperty(_exclusive38, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Phantom Plumes']), _defineProperty(_exclusive38, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Grey Falcon']), _defineProperty(_exclusive38, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Silver Eagle']), _defineProperty(_exclusive38, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Pale Feathers', 'Sharp Eyes']), _exclusive38),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]),
      secondary: (_secondary38 = {}, _defineProperty(_secondary38, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _defineProperty(_secondary38, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus2.name]), _defineProperty(_secondary38, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _secondary38),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name])
    },
    notes: "Can pick Kalpas and Eden signets as reinforcement.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>Priority.")
  }]
};
// Terminal Aide 0017
var ta = {
  name: 'Terminal Aide 0017',
  acr: 'ta',
  version: '6.6',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][8]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.goldGoblet, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.farawayShip, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.sa]]],
    signetTable: {
      exclusive: (_exclusive39 = {}, _defineProperty(_exclusive39, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Guilding']), _defineProperty(_exclusive39, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Recursion']), _defineProperty(_exclusive39, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Restructuring']), _defineProperty(_exclusive39, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Override', 'Stimulus']), _exclusive39),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.blades, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.breachPhys]),
      secondary: (_secondary39 = {}, _defineProperty(_secondary39, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name]), _defineProperty(_secondary39, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _secondary39),
      optional: (_optional22 = {}, _defineProperty(_optional22, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _defineProperty(_optional22, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln]), _optional22)
    },
    notes: "<p>Eden</p>Can pick Nexus 2 signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name, "</span>.")
  }]
};
// Striker Fulminata
var vb = {
  name: 'Striker Fulminata',
  acr: 'vb',
  version: '5.9',
  builds: [{
    signet: {
      transitional: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '2']],
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.heavyAsAMillionLives, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.le], [_data__WEBPACK_IMPORTED_MODULE_0__.sn]], [[_data__WEBPACK_IMPORTED_MODULE_0__.vc], [_data__WEBPACK_IMPORTED_MODULE_0__.ss]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.dabr, _data__WEBPACK_IMPORTED_MODULE_0__.dirt, _data__WEBPACK_IMPORTED_MODULE_0__.dirm, _data__WEBPACK_IMPORTED_MODULE_0__.dirb], [_data__WEBPACK_IMPORTED_MODULE_0__.dosa, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.dirm, _data__WEBPACK_IMPORTED_MODULE_0__.elyb], [_data__WEBPACK_IMPORTED_MODULE_0__.thsa, _data__WEBPACK_IMPORTED_MODULE_0__.rebt, _data__WEBPACK_IMPORTED_MODULE_0__.marm, _data__WEBPACK_IMPORTED_MODULE_0__.rebb]],
    signetTable: {
      exclusive: (_exclusive40 = {}, _defineProperty(_exclusive40, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Current']), _defineProperty(_exclusive40, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Karma']), _defineProperty(_exclusive40, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Idea', 'Thunder']), _defineProperty(_exclusive40, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Zanshin']), _exclusive40),
      transitional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus2.name]),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.dur]),
      secondary: (_secondary40 = {}, _defineProperty(_secondary40, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name]), _defineProperty(_secondary40, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]), _defineProperty(_secondary40, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgReduc, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name]), _secondary40)
    },
    notes: "<p>Recommended Gear</p>Build 2: If not enough breach or impair, pick breach from signets.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, "</p>Buy from shop if possible.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgReduc, "</p>If needed.")
  }]
};
// Twilight Paladin
var ve = {
  name: 'Twilight Paladin',
  acr: 've',
  version: '5.9',
  builds: [{
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.eden, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.lightAsABodhiLeaf, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold], [_data__WEBPACK_IMPORTED_MODULE_0__.goodOldDays, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.sa], [_data__WEBPACK_IMPORTED_MODULE_0__.sn]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.heso, _data__WEBPACK_IMPORTED_MODULE_0__.kaft, _data__WEBPACK_IMPORTED_MODULE_0__.kafm, _data__WEBPACK_IMPORTED_MODULE_0__.kafb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.elyt, _data__WEBPACK_IMPORTED_MODULE_0__.siem, _data__WEBPACK_IMPORTED_MODULE_0__.elyb]],
    signetTable: {
      exclusive: (_exclusive41 = {}, _defineProperty(_exclusive41, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Banishment']), _defineProperty(_exclusive41, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Penalty']), _defineProperty(_exclusive41, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Dusk']), _defineProperty(_exclusive41, _data__WEBPACK_IMPORTED_MODULE_0__.reinforcement, ['Radiance', 'Sanction']), _exclusive41),
      main: (_main41 = {}, _defineProperty(_main41, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal]), _defineProperty(_main41, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.basicAtk, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle]), _main41),
      secondary: (_secondary41 = {}, _defineProperty(_secondary41, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange]), _defineProperty(_secondary41, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus2.name]), _defineProperty(_secondary41, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary41)
    },
    notes: "<p>Su</p>Don't pick enhanced signets. Double Ego start.<br><br>\n\t\t\t\t\t<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.spRestore, "</p>Priority.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus2.orange, "</p>If lacking breach.")
  }]
};
// Valkyrie Gloria
var vg = {
  name: 'Valkyrie Gloria',
  acr: 'vg',
  version: '5.9',
  builds: [{
    signet: {
      transitional: [[_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.aponia, '2']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.hua, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.veilOfTears, _data__WEBPACK_IMPORTED_MODULE_0__.theLonelyMoon], [_data__WEBPACK_IMPORTED_MODULE_0__.proofOfGoodAndEvil, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br, _data__WEBPACK_IMPORTED_MODULE_0__.ma]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.eogl, _data__WEBPACK_IMPORTED_MODULE_0__.leet, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.leeb], [_data__WEBPACK_IMPORTED_MODULE_0__.saas, _data__WEBPACK_IMPORTED_MODULE_0__.ragt, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.ireb]],
    signetTable: {
      exclusive: (_exclusive42 = {}, _defineProperty(_exclusive42, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Battle Song']), _defineProperty(_exclusive42, _data__WEBPACK_IMPORTED_MODULE_0__.first, ['Gloria']), _defineProperty(_exclusive42, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Impetus', 'Sol', 'Triumph']), _exclusive42),
      transitional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name]),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.name, [_data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.vuln]),
      secondary: (_secondary42 = {}, _defineProperty(_secondary42, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgWeap, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln]), _defineProperty(_secondary42, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow]), _defineProperty(_secondary42, _data__WEBPACK_IMPORTED_MODULE_0__.hua.name, [_data__WEBPACK_IMPORTED_MODULE_0__.hua.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.hua.nexus2.name]), _secondary42)
    },
    notes: "<p>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.dmgPhysEle, ", ").concat(_data__WEBPACK_IMPORTED_MODULE_0__.aponia.nexus2.breachPhysEle, "</p>Priority.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, "</p>If lacking breach.")
  }]
};
// Helical Contraption
var villv = {
  name: 'Helical Contraption',
  acr: 'villv',
  version: '6.5',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][3], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][8], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][8]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '2'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.mobius, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kosma, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.su, '2']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.rainbowOfAbsence, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.tinFlask, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br, _data__WEBPACK_IMPORTED_MODULE_0__.vc]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ma], [_data__WEBPACK_IMPORTED_MODULE_0__.ae, _data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.topa, _data__WEBPACK_IMPORTED_MODULE_0__.cart, _data__WEBPACK_IMPORTED_MODULE_0__.carm, _data__WEBPACK_IMPORTED_MODULE_0__.carb], [_data__WEBPACK_IMPORTED_MODULE_0__.hawp, _data__WEBPACK_IMPORTED_MODULE_0__.leet, _data__WEBPACK_IMPORTED_MODULE_0__.tham, _data__WEBPACK_IMPORTED_MODULE_0__.leeb]],
    signetTable: {
      exclusive: (_exclusive43 = {}, _defineProperty(_exclusive43, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Facade', 'Sleight']), _defineProperty(_exclusive43, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Reversal']), _defineProperty(_exclusive43, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Assemblage', 'Transmission']), _exclusive43),
      main: (_main43 = {}, _defineProperty(_main43, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgRanged, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus2.gravField]), _defineProperty(_main43, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _main43),
      secondary: (_secondary43 = {}, _defineProperty(_secondary43, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.name, [_data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgEntity, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.mobius.nexus1.breachPhysEle]), _defineProperty(_secondary43, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.evasion, _data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield]), _defineProperty(_secondary43, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal]), _secondary43)
    },
    notes: "Can buy Sakura's signet <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.sakura.regular.dmgTotal, "</span>, or Eden's signets <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span> as reinforcement.")
  }]
};
// Valkyrie Quicksand
var vq = {
  name: 'Valkyrie Quicksand',
  acr: 'vq',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[3][6]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.vv, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.eden, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.psuedoMiracle, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.goldGoblet, _data__WEBPACK_IMPORTED_MODULE_0__.fallingInPastLight], [_data__WEBPACK_IMPORTED_MODULE_0__.farawayShip, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.sa], [_data__WEBPACK_IMPORTED_MODULE_0__.bke]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ss], [_data__WEBPACK_IMPORTED_MODULE_0__.br, _data__WEBPACK_IMPORTED_MODULE_0__.sa]]],
    signetTable: {
      exclusive: (_exclusive44 = {}, _defineProperty(_exclusive44, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Dappled Shade']), _defineProperty(_exclusive44, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Luster']), _defineProperty(_exclusive44, _data__WEBPACK_IMPORTED_MODULE_0__.optional, ['Rarities']), _defineProperty(_exclusive44, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Tambourine', 'Whimsy']), _exclusive44),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.vv.name, [_data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgWeap, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.vv.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.blades, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.breachPhys, _data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.dmgShield]),
      secondary: (_secondary44 = {}, _defineProperty(_secondary44, _data__WEBPACK_IMPORTED_MODULE_0__.eden.name, [_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.spCapInitial, _data__WEBPACK_IMPORTED_MODULE_0__.eden.nexus1.name]), _defineProperty(_secondary44, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name]), _defineProperty(_secondary44, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _secondary44),
      optional: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.black])
    },
    notes: "Can pick Kosma's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.ult, "</span>, and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.kosma.regular.dmgShield, "</span> as reinforcement.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.vv.nexus1.breachPhys, "</p>Priority and upgrade.<br><br>\n\t\t\t\t\t<p>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, "</p>Buy if in shop.")
  }]
};
// Vermilion Knight: Eclipse
var vkek = {
  name: 'Vermilion Knight: Eclipse',
  acr: 'vke',
  version: '6.7',
  builds: [{
    buff: [_data__WEBPACK_IMPORTED_MODULE_0__.buffs[0][4], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[1][9], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][7], _data__WEBPACK_IMPORTED_MODULE_0__.buffs[2][11]],
    signet: {
      main: [[_data__WEBPACK_IMPORTED_MODULE_0__.kevin, '1']],
      secondary: [[_data__WEBPACK_IMPORTED_MODULE_0__.su, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas, '1']],
      optional: [[_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis, '1'], [_data__WEBPACK_IMPORTED_MODULE_0__.griseo, '1']]
    },
    emblem: [[_data__WEBPACK_IMPORTED_MODULE_0__.burden, _data__WEBPACK_IMPORTED_MODULE_0__.itWillBeWritten], [_data__WEBPACK_IMPORTED_MODULE_0__.madKingsMask, _data__WEBPACK_IMPORTED_MODULE_0__.anOldPalsLegacy], [_data__WEBPACK_IMPORTED_MODULE_0__.keyToTheDeep, _data__WEBPACK_IMPORTED_MODULE_0__.dreamfulGold]],
    support: [[[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.le]], [[_data__WEBPACK_IMPORTED_MODULE_0__.ae], [_data__WEBPACK_IMPORTED_MODULE_0__.br]]],
    gear: [[_data__WEBPACK_IMPORTED_MODULE_0__.shur, _data__WEBPACK_IMPORTED_MODULE_0__.ragt, _data__WEBPACK_IMPORTED_MODULE_0__.ragm, _data__WEBPACK_IMPORTED_MODULE_0__.ragb], [_data__WEBPACK_IMPORTED_MODULE_0__.sumu, _data__WEBPACK_IMPORTED_MODULE_0__.aslt, _data__WEBPACK_IMPORTED_MODULE_0__.aslm, _data__WEBPACK_IMPORTED_MODULE_0__.aslb]],
    signetTable: {
      exclusive: (_exclusive45 = {}, _defineProperty(_exclusive45, _data__WEBPACK_IMPORTED_MODULE_0__.start, ['Sharp Flames']), _defineProperty(_exclusive45, _data__WEBPACK_IMPORTED_MODULE_0__.second, ['Fiery Mind', 'Wild Flare']), _defineProperty(_exclusive45, _data__WEBPACK_IMPORTED_MODULE_0__.no, ['Blaze', 'Burning Flow']), _exclusive45),
      main: _defineProperty({}, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.dmgEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.breachEle, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.regular.spRestore, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kevin.nexus1.effect]),
      secondary: (_secondary45 = {}, _defineProperty(_secondary45, _data__WEBPACK_IMPORTED_MODULE_0__.su.name, [_data__WEBPACK_IMPORTED_MODULE_0__.su.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo25, _data__WEBPACK_IMPORTED_MODULE_0__.su.regular.combo60, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.breachPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.su.nexus1.vuln]), _defineProperty(_secondary45, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.name, [_data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.vuln, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.regular.hp, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.name, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.fire, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.bbRecharge, _data__WEBPACK_IMPORTED_MODULE_0__.kalpas.nexus1.dmgBonus]), _secondary45),
      optional: (_optional24 = {}, _defineProperty(_optional24, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.name, [_data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgTotal, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.dmgPhysEle, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.regular.spHpCap, _data__WEBPACK_IMPORTED_MODULE_0__.pardofelis.nexus1.name]), _defineProperty(_optional24, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.name, [_data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.grey, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.red, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.regular.yellow, _data__WEBPACK_IMPORTED_MODULE_0__.griseo.nexus1.name]), _optional24)
    },
    notes: "Can pick Eden's signets <span>".concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgPhysEle, "</span> and <span>").concat(_data__WEBPACK_IMPORTED_MODULE_0__.eden.regular.dmgTotal, "</span> as reinforcement.")
  }]
};
var valks = [aka, bke, cn, da, aponia, dw, fr, mc, eden, gm, villv, hofi, hofs, hoh, hoo, hor, hos, hov, hot, hotr, mobius, sus, lk, raven, elysia, pe, fischl, pardo, ri, sk, sw, ss, spa, griseo, nyx, sn, vb, kira, carole, ta, ve, vg, vq, vkek];
var valksLength = valks.length;

/***/ }),

/***/ "./src/scripts/main.ts":
/*!*****************************!*\
  !*** ./src/scripts/main.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _guide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guide */ "./src/scripts/guide.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data */ "./src/scripts/data.ts");
/* harmony import */ var _build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./build */ "./src/scripts/build.ts");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }




/* import LogRocket from 'logrocket';
LogRocket.init('h6xl7p/elysian-realm');

// get/set unique ID
let uniqueId = localStorage.getItem('uniqueId');
if (!uniqueId) {
	uniqueId = crypto.randomUUID();
	localStorage.setItem('uniqueId', uniqueId);
}
LogRocket.identify(uniqueId);*/

var body = document.querySelector('body');
window.scroll({
  top: 0
});
body.style.overflow = 'hidden';

// execute animation after all images are loaded
function load(src) {
  return new Promise(function (resolve, reject) {
    var image = new Image();
    image.addEventListener('load', resolve);
    image.addEventListener('error', reject);
    image.src = src;
  });
}
var time = 0;
function fadeAnim(item, fade) {
  setTimeout(function () {
    item.classList.remove('hidden');
    item.classList.add(fade);
    setTimeout(function () {
      item.classList.remove(fade);
    }, 1990);
  }, time);
  time += interval;
}
// insert bg and banner image paths
var banners = document.querySelectorAll('.banner');
var paths = [];
var getBgPath = function getBgPath(el) {
  return window.getComputedStyle(el).getPropertyValue('background-image').substring(5).slice(0, -2);
};
paths.push(getBgPath(_build__WEBPACK_IMPORTED_MODULE_2__.bg));
banners.forEach(function (banner) {
  return paths.push(getBgPath(banner.children[0]));
});
// wait for images to load
var cover = document.querySelector('#cover');
var progressBar = document.querySelector('#progress-bar');
var progressBarWidthInPixels = parseInt(window.getComputedStyle(progressBar).width) + 1;
var meter = document.querySelector('#meter');
var done = 0,
  progressInPixels = 0;
paths.forEach(function (link) {
  load(link).then(function () {
    done += 1;
    // progress bar
    var percentDone = Math.round(done / paths.length * 100) / 100;
    var fillPixels = Math.round(percentDone * progressBarWidthInPixels);
    while (meter.style.width !== "".concat(fillPixels, "px")) {
      progressInPixels += 1;
      meter.style.width = "".concat(progressInPixels, "px");
    }
    if (done === paths.length) {
      // start animation
      body.style.overflow = 'auto';
      cover.classList.add('fade');
      setTimeout(function () {
        cover.remove();
      }, 1000);
      // animations:
      // fade-in-up/down, only applied to the banners in the viewport (desktop)
      // fade-in-left/right, applied to all banners (mobile)
      finalArr.forEach(function (_, index) {
        if (index % 2 === 0) {
          fadeAnim(banners[finalArr[index]], animation1);
        } else {
          fadeAnim(banners[finalArr[index]], animation2);
        }
      });
      if (!_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
        // instantly display banners outside viewport
        // not covering the one in a million chance that the user
        // expands the window width while the animation is still ongoing 😡
        banners.forEach(function (_, index) {
          if (!finalArr.includes(index)) banners[index].classList.remove('hidden');
        });
        // allow scroll
        setTimeout(function () {
          _build__WEBPACK_IMPORTED_MODULE_2__.mainContainer.removeEventListener('scroll', preventScroll);
        }, bannersInViewport * interval);
      }
    }
  })["catch"](function () {
    // make reload page
    var errMsg = document.createElement('p');
    errMsg.setAttribute('id', 'error-msg');
    errMsg.innerText = 'An error occured. Please reload the page.';
    var reloadBtn = document.createElement('button');
    reloadBtn.setAttribute('id', 'refresh');
    reloadBtn.setAttribute('onclick', 'window.location.reload();');
    var span = document.createElement('span');
    span.classList.add('material-icons');
    span.innerText = 'refresh';
    reloadBtn.appendChild(span);
    cover.innerHTML = '';
    cover.classList.add('f-col');
    cover.appendChild(errMsg);
    cover.appendChild(reloadBtn);
  });
});

// highlight adjacent merged cell on hover from table rows
// since rows that have an adjacent merged cell and don't have the rowspan attribute won't highlight it
function highlightAdjacentMergedCell(row, bool) {
  // check if inner HTML only has 1 pair of td tags
  // in a 2 column table it has 2 td tags per row
  // meaning if a row has one less td tag it either has
  // a missing cell in the row, or a merged cell (this case)
  if (row.innerHTML.match(/<\/td>/g).length === 1 ||
  // doesn't include rowspan, since it's already part of the first row
  !row.innerHTML.includes('rowspan')) {
    // get all rows of its parent table
    var parentChildren = row.parentNode.children;
    // iterate and check if row has a rowspan attribute in the cell of the 2nd column
    for (var i = 0; i < parentChildren.length; i++) {
      if (parentChildren[i].innerHTML.includes('rowspan')) {
        var j = parentChildren[i].children[0].hasAttribute('rowspan') ? 0 : 1;
        // get rowspan value
        var range = parseInt(parentChildren[i].children[j].getAttribute('rowspan')) - 1;
        // get index of selected row and merged cell
        var thisIndex = row.rowIndex;
        var mergedCellIndex = parentChildren[i].rowIndex;
        // check if index is covered within the range of merged cell
        if (thisIndex >= mergedCellIndex && thisIndex <= mergedCellIndex + range) {
          // apply styles
          if (bool) parentChildren[i].children[j].classList.add('table-cell-hover');else parentChildren[i].children[j].classList.remove('table-cell-hover');
        }
      }
    }
  }
}
var rowsExceptHeader = document.querySelectorAll('tr:not(thead tr):not(.gear-tbl tr)');
rowsExceptHeader.forEach(function (row) {
  row.addEventListener('mouseout', function () {
    this.classList.remove('table-cell-hover');
    highlightAdjacentMergedCell(this, false);
  });
});
function highlightRow() {
  this.classList.add('table-cell-hover');
  highlightAdjacentMergedCell(this, true);
}

// highlight all adjacent rows on hover from merged cells
function highlightInvolvedRows(row, bool) {
  var mergeSize = parseInt(row.getAttribute('rowspan')) - 1;
  var cellIndex = row.parentNode.rowIndex;
  for (var i = cellIndex; i < cellIndex + mergeSize; i++) {
    if (bool) {
      row.parentNode.parentNode.children[i].classList.add('table-cell-hover');
    } else {
      row.parentNode.parentNode.children[i].classList.remove('table-cell-hover');
    }
  }
}
var cellsWithRowspan = document.querySelectorAll('td[rowspan]');
cellsWithRowspan.forEach(function (cell) {
  cell.addEventListener('mouseout', function () {
    highlightInvolvedRows(this, false);
  });
});
function highlightRows() {
  highlightInvolvedRows(this, true);
}

// hide previously clicked tooltip
var tooltipable = document.querySelectorAll('input');
tooltipable.forEach(function (item) {
  item.addEventListener('click', function () {
    var _iterator = _createForOfIteratorHelper(tooltipable),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var otherItem = _step.value;
        if (otherItem !== item) otherItem.checked = false;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  });
});

// anchor smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
  anchor.addEventListener('click', function (e) {
    return e.preventDefault();
  });
  anchor.addEventListener('click', function () {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
var originalText = null,
  previousText;
function changeText(deez) {
  for (var i = 0; i < Object.keys(_data__WEBPACK_IMPORTED_MODULE_1__.signetSummary).length; i++) {
    if (_data__WEBPACK_IMPORTED_MODULE_1__.signetSummary[i].signets.includes(deez.textContent) || _data__WEBPACK_IMPORTED_MODULE_1__.signetSummary[i].signets === deez.textContent) {
      previousText = deez;
      originalText = deez.textContent;
      deez.textContent = _data__WEBPACK_IMPORTED_MODULE_1__.signetSummary[i].summary;
    }
  }
}
function revertText(deez) {
  deez.textContent = originalText;
  originalText = null;
}

// close and to top button position
var closeButton = document.querySelector('#close');
var toTopButton = document.querySelector('#goToTop');
function setCloseAndTotopBtnPos(closeTop, closeLeft, toTopTop, toTopLeft) {
  closeButton.style.top = "".concat(closeTop, "px");
  closeButton.style.left = "".concat(closeLeft, "px");
  toTopButton.style.top = "".concat(toTopTop, "px");
  toTopButton.style.left = "".concat(toTopLeft, "px");
}
var deviceWidth = window.innerWidth;
var deviceHeight = window.innerHeight;
var guideEntryAnim, guideExitAnim;
var topPos, bottomPos;
var rightPos = deviceWidth / 2 + 243;
var prevHeight = window.outerHeight;
function setAnimAndPos() {
  // guide animations and close/gototop button positions
  if (deviceHeight >= 950) {
    guideEntryAnim = 'guide-entry-desktop-n';
    guideExitAnim = 'guide-exit-desktop-n';
    topPos = 135;
    bottomPos = 866;
  } else {
    guideEntryAnim = 'guide-entry-desktop-s';
    guideExitAnim = 'guide-exit-desktop-s';
    topPos = 15;
    bottomPos = deviceHeight - 60;
  }
}
var signetTableCells = document.querySelectorAll('.transitional-tbl td, .main-tbl td, .secondary-tbl td, .optional-tbl td');
// setup of banner indices for animation order
// desktop - banners in the middile of mainContainer (starting view) in random order, vertical animation
// mobile - all banners in linear order, horizontal animation
var animation1, animation2;
var preventScroll;
var bannersInViewport = 0;
var finalArr = [];
// interval gets faster the more banners are in viewport
// in mobile, interval is constant
var interval = 0;
if (_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
  animation1 = 'fade-in-left';
  animation2 = 'fade-in-right';
  finalArr = Array.from(Array(_guide__WEBPACK_IMPORTED_MODULE_0__.valksLength).keys()); // all

  // change signet name to summary on hover/mobile click
  (function (signetTableCells) {
    signetTableCells.forEach(function (cell) {
      cell.addEventListener('mouseover', function () {
        if (originalText !== null && previousText !== null && !this.textContent.includes('(Nexus)')) {
          revertText(previousText);
          changeText(this);
        } else if (originalText === null) {
          changeText(this);
        } else {
          revertText(previousText);
        }
      });
    });
  })(signetTableCells);
  interval = 100;
  _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.add('hidden');
} else {
  animation1 = 'fade-in-up';
  animation2 = 'fade-in-down';
  var scrollVal = (_build__WEBPACK_IMPORTED_MODULE_2__.mainContainer.scrollWidth - _build__WEBPACK_IMPORTED_MODULE_2__.mainContainer.offsetWidth) / 2; // middle
  _build__WEBPACK_IMPORTED_MODULE_2__.mainContainer.scroll({
    left: scrollVal
  }); // scroll to middle
  // lock mainContainer scroll during banner animation
  preventScroll = function preventScroll() {
    return _build__WEBPACK_IMPORTED_MODULE_2__.mainContainer.scroll({
      left: scrollVal
    });
  };
  _build__WEBPACK_IMPORTED_MODULE_2__.mainContainer.addEventListener('scroll', preventScroll);

  // setup no. of banners
  bannersInViewport = Math.ceil((deviceWidth + Math.floor(deviceWidth / 100)) / 100) + 1;
  // randomize array elements
  var rng = function rng(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  };
  var hiddenBanners = _guide__WEBPACK_IMPORTED_MODULE_0__.valksLength - bannersInViewport;
  var bannerIndicesInViewport = Array.from(Array(bannersInViewport).keys()).map(function (e) {
    return e + Math.round(hiddenBanners / 2);
  });
  while (bannerIndicesInViewport.length !== 0) {
    var bannerLength = bannerIndicesInViewport.length;
    var randomIndex = bannerIndicesInViewport.length % 2 === 0 ? rng(0, bannerLength / 2) : rng(Math.floor(bannerLength / 2), bannerLength);
    var randomElement = bannerIndicesInViewport[randomIndex];
    finalArr.push(randomElement);
    bannerIndicesInViewport.splice(bannerIndicesInViewport.indexOf(randomElement), 1);
  }
  (function (signetTableCells) {
    signetTableCells.forEach(function (cell) {
      cell.addEventListener('mouseover', function () {
        changeText(this);
      });
      cell.addEventListener('mouseout', function () {
        if (originalText !== null) revertText(this);
      });
    });
  })(signetTableCells);
  _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.3)';
  setAnimAndPos();
  // wait for resize event to end before executing function
  var task;
  window.addEventListener('resize', function () {
    clearTimeout(task);
    task = setTimeout(function () {
      // update animations and button positions
      deviceWidth = window.innerWidth;
      deviceHeight = window.innerHeight;
      rightPos = deviceWidth / 2 + 243;

      // hide guide when browser height threshold is reached
      if (prevHeight <= 949 && deviceHeight >= 950 || prevHeight >= 950 && deviceHeight <= 949) hide();
      setAnimAndPos();
      setCloseAndTotopBtnPos(topPos, rightPos, bottomPos, rightPos);
      prevHeight = deviceHeight;
    }, 50);
  });
  interval = 300 - bannersInViewport * 5;
}

// setup modal closing
var verticalText = document.querySelectorAll('.vertical-text');
var mainStylesheet = document.styleSheets[document.styleSheets.length - 1].cssRules; // styles.css
var mobileUpperBanners = _guide__WEBPACK_IMPORTED_MODULE_0__.valksLength - 1 - Math.floor(deviceHeight / (deviceWidth / 4));
var currentBanner; // for unsetting banner style in mobile
var currentGuide;
function hide() {
  body.style.overflow = 'auto'; // resume scroll
  body.style.pointerEvents = 'none';
  _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.remove('bg-fade-in');
  _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.add('bg-fade-out');
  if (_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
    currentBanner.children[0].style.filter = '';
    currentBanner.children[1].children[0].style.color = '';
    currentGuide.classList.remove('guide-bot-entry-mobile', 'guide-top-entry-mobile', 'upper');
    // exit animation
    if (Array.from(currentBanner.parentNode.children).indexOf(currentBanner) > mobileUpperBanners) {
      currentGuide.classList.add('guide-bot-exit-mobile');
    } else {
      currentGuide.classList.add('guide-top-exit-mobile');
    }
    // unhide banner names
    verticalText.forEach(function (text) {
      return text.style.opacity = '1';
    });
    // hide fade effect
    for (var i = 0; i < mainStylesheet.length; i++) {
      var cssRule = mainStylesheet[i];
      if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
        cssRule.style.opacity = '0';
        cssRule.style.animation = '';
      }
    }
  } else {
    if (currentGuide) {
      currentGuide.classList.remove(guideEntryAnim);
      currentGuide.classList.add(guideExitAnim);
    }
  }
  closeButton.style.visibility = 'hidden';
  toTopButton.style.visibility = 'hidden';
  // re-enable pointer events and hide elements right before animation ends
  setTimeout(function () {
    body.style.pointerEvents = 'auto';
    _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.add('no-display');
    if (currentGuide) {
      currentGuide.classList.add('no-display');
      currentGuide.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile', guideEntryAnim, 'guide-exit-desktop-n', 'guide-exit-desktop-s');
    }
  }, 450);
  rowsExceptHeader.forEach(function (row) {
    return row.removeEventListener('mouseover', highlightRow);
  });
  cellsWithRowspan.forEach(function (cell) {
    return cell.removeEventListener('mouseover', highlightRows);
  });
}
closeButton.addEventListener('click', function () {
  return hide();
}); // close on close button click
_build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.addEventListener('click', function () {
  return hide();
}); // close when clicking outside modal

var guideContents = document.querySelectorAll('.guide-content');
guideContents.forEach(function (guideContent) {
  return guideContent.addEventListener('click', function (e) {
    return e.stopPropagation();
  });
});
var afterOffset, direction, psuedoDirection;
// show respective guide content on banner click
banners.forEach(function (banner) {
  banner.addEventListener('click', function () {
    var _this = this;
    console.log(this.textContent);
    body.style.pointerEvents = 'none'; // disable events during transition
    var index = Array.from(this.parentNode.children).indexOf(this);
    currentGuide = guideContents[index];
    // animation
    _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.remove('bg-fade-out', 'no-display');
    _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.add('bg-fade-in');
    // button offsets
    var closeButtonOffsetTop, toTopButtonOffsetTop;
    if (_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
      body.style.overflow = 'hidden'; // prevent outside scroll while guide is open
      currentGuide.classList.remove('guide-bot-exit-mobile', 'guide-top-exit-mobile');
      // check if banner is high enough to be scrolled at the top of the viewport
      // since the banner will be used as the name instead of a plain text one
      // if not, it will be scrolled at the bottom, either applying respective styles below
      var offset = 0;
      if (index > mobileUpperBanners) {
        // scroll to banner on bottom
        currentGuide.classList.add('guide-bot-entry-mobile');
        // style ::before and ::after psuedo selectors for content fade effect
        afterOffset = '25vw';
        direction = 'bottom';
        psuedoDirection = 'up';
        // window scroll offset
        offset = this.offsetTop + this.offsetHeight - deviceHeight;
        // button offset
        closeButtonOffsetTop = 15;
        toTopButtonOffsetTop = deviceHeight - deviceWidth / 4 - 60;
      } else {
        // scroll to banner on top
        currentGuide.classList.add('guide-top-entry-mobile', 'upper'); // (animation, spacing)
        afterOffset = '0';
        direction = 'top';
        psuedoDirection = 'down';
        offset = this.offsetTop;
        closeButtonOffsetTop = deviceWidth / 4 + 15;
        toTopButtonOffsetTop = deviceHeight - 60;
      }
      window.scroll({
        top: offset,
        behavior: 'smooth'
      });
    } else {
      currentGuide.classList.remove(guideExitAnim, 'no-display');
      currentGuide.classList.add(guideEntryAnim);
    }

    // timeout to prevent highlighting when guide is still in animation (desktop)
    // and to wait for animation to end to apply styles (mobile)
    setTimeout(function () {
      body.style.pointerEvents = 'auto';
      rowsExceptHeader.forEach(function (row) {
        return row.addEventListener('mouseover', highlightRow);
      });
      cellsWithRowspan.forEach(function (cell) {
        return cell.addEventListener('mouseover', highlightRows);
      });
      closeButton.style.visibility = 'visible';
      if (_data__WEBPACK_IMPORTED_MODULE_1__.isMobile) {
        // style ::after and ::before psuedo selectors
        var beforeOffset = 'calc(25vw - 5px)';
        for (var i = 0; i < mainStylesheet.length; i++) {
          var cssRule = mainStylesheet[i];
          if (cssRule.selectorText === '#guide-container::before' || cssRule.selectorText === '#guide-container::after') {
            cssRule.style.opacity = '1';
            cssRule.style.animation = "fadein".concat(psuedoDirection, " 0.6s ease-out forwards");
            if (cssRule.selectorText === '#guide-container::before') {
              if (direction === 'top') {
                cssRule.style.bottom = '';
                cssRule.style.top = beforeOffset;
              } else {
                cssRule.style.top = '';
                cssRule.style.bottom = beforeOffset;
              }
              cssRule.style.backgroundImage = "linear-gradient(to ".concat(direction, ", rgba(0, 0, 0, 0.7), transparent)");
            }
            if (cssRule.selectorText === '#guide-container::after') cssRule.style.bottom = afterOffset;
          }
        }
        // show guide
        _build__WEBPACK_IMPORTED_MODULE_2__.guideContainer.classList.remove('hidden', 'no-display');
        currentGuide.classList.remove('no-display');
        currentBanner = _this;
        // style banner
        _this.children[0].style.filter = 'brightness(90%) blur(4px)';
        _this.children[1].children[0].style.color = 'white';
        // hide all banner names except from the selected banner
        verticalText.forEach(function (text) {
          if (text.innerText !== _this.innerText) text.style.opacity = '0';
        });
        setCloseAndTotopBtnPos(closeButtonOffsetTop, deviceWidth - 60, toTopButtonOffsetTop, deviceWidth - 60);
      } else {
        setCloseAndTotopBtnPos(topPos, rightPos, bottomPos, rightPos);
      }
    }, 600);

    // goToTop button visibility
    currentGuide.addEventListener('scroll', function (e) {
      return toTopButton.style.visibility = e.currentTarget.scrollTop > 700 ? 'visible' : 'hidden';
    });
    // go to top of guide
    toTopButton.addEventListener('click', function (e) {
      var t = e.currentTarget.currentGuide;
      guideContents[Array.from(t.parentNode.children).indexOf(t)].scroll({
        top: 0,
        behavior: 'smooth'
      });
    });
    toTopButton.currentGuide = currentGuide;
    // scroll to the top
    currentGuide.scrollTo({
      top: 0
    });
  });
});

/***/ }),

/***/ "./src/assets/styles/reset.css":
/*!*************************************!*\
  !*** ./src/assets/styles/reset.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/styles/reset.css");

/***/ }),

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/styles/styles.css");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./src/scripts/script.ts ***!
  \*******************************/
__webpack_require__(/*! ./build */ "./src/scripts/build.ts");
__webpack_require__(/*! ./data */ "./src/scripts/data.ts");
__webpack_require__(/*! ./guide */ "./src/scripts/guide.ts");
__webpack_require__(/*! ./main */ "./src/scripts/main.ts");
__webpack_require__(/*! ../assets/styles/reset.css */ "./src/assets/styles/reset.css");
__webpack_require__(/*! ../assets/styles/styles.scss */ "./src/assets/styles/styles.scss");
})();

/******/ })()
;
//# sourceMappingURL=script.js.map