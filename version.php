<?php

$lander       = "https://syn.su/lander.php?r=land/index";
$land         = 'upravlay';
$unit         = 'fridman';
$type         = '';
$phone        = '<span>+7&nbsp;495</span>&nbsp;787&nbsp;87&nbsp;67';
$phone_link   = '+74957878767';
$date         = '';
$quote_id     = '';
$price        = '';
$speaker      = '';
$program      = '';
$link         = '';

$action = implode(array(

    $lander,

    '&land='     ,  $land,
    '&unit='     ,  $unit,
    '&type='     ,  $type,
    '&version='  ,  $version,
    '&partner='  ,  $partner,
    '&speaker='  ,  $speaker,
    '&program='  ,  $program,
    '&link='     ,  $link,
    '&quote_id=' ,  $quote_id,

    '&ignore-thanksall=1'
));
