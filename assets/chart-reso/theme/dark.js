/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/**
 * (c) 2010-2017 Torstein Honsi
 *
 * License: www.highcharts.com/license
 *
 * Dark theme for Highcharts JS
 * @author Torstein Honsi
 */

'use strict';
/* global document */
// Load the fonts
//import Highcharts from '../parts/Globals.js';
Highcharts.createElement('link', {
    href: 'https://fonts.googleapis.com/css?family=Raleway',
    rel: 'stylesheet',
    type: 'text/css'
}, null, document.getElementsByTagName('head')[0]);

Highcharts.dark = {
    colors: ['#2b908f', '#90ee7e', '#f45b5b', '#7798BF', '#aaeeee', '#ff0066',
        '#eeaaee', '#55BF3B', '#DF5353', '#7798BF', '#aaeeee'],
    chart: {
        backgroundColor: '#2F323A',
        style: {
            fontFamily: '\'Raleway\', sans-serif'
        }
    },
    title: {
        style: {
            color: '#E0E0E3',
            fontSize: '15px',
            fontStyle :'italic',
            letterSpacing:'3px',
            fontWeight:'700',
            color: '#9F86FF'
        }
    },
    subtitle: {
        style: {
            color: '#E0E0E3',
            fontSize: '10px',
            fontStyle :'italic'
        }
    },
    tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        style: {
            color: '#F0F0F0',
            fontWeight:'100',
            fontFamily:'monospace'
        }
    },
    plotOptions: {
        series: {
            dataLabels: {
                color: '#B0B0B3'
            },
            marker: {
                lineColor: '#B0B0B3'
            }
        },
        boxplot: {
            fillColor: '#505053'
        },
        candlestick: {
            lineColor: 'white'
        },
        errorbar: {
            color: 'white'
        }
    },
    legend: {
        itemStyle: {
            color: '#E0E0E3',
            fontWeight:'100',
            letterSpacing:'1px',
            fontSize:'12px',
        },
        itemHoverStyle: {
            color: '#FFF'
        },
        itemHiddenStyle: {
            color: '#606063'
        }
    }


};