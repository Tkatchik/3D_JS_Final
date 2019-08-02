'use strict';

import countTimer from './modules/countTimer';
import toggleMenue from './modules/toggleMenue';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import fotoChange from './modules/photoChange';
import calc from './modules/calc';
import validationForm from './modules/validationForm';
import sendForm from './modules/sendForm';

// timer
countTimer('10 august 2019');

//меню
toggleMenue();

//popup
togglePopUp();

// tabs
tabs();

// slider
slider();

// changing foto
fotoChange();

//calc
calc(100);

validationForm();

// send-ajax-form
sendForm();