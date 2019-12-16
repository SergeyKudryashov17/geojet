<?php
/*
 * Template Name: Контакты
 */
?>
<?php get_header(); ?>

    <section>
        <div class="container-fluid">
            <div class="row">
                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="top-part">
                        <?php
                            $group = get_field('main_headline');
                            if($group){
                                $headline = $group['headline'];
                                $signature = $group['signature'];
                            }
                        ?>
                        <div class="main-slogan" style="font-size: <? echo get_field('size-headline'); ?>px"><? echo $headline; ?></div>
                        <div class="mini-slogan" style="font-size: <? echo get_field('size-subheadline'); ?>px"><? echo $signature; ?><</div>
                    </div>
                </div>
            </div>
            <div class="row relative">
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="row">
                        <div class="left-triangle">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/left-triangle.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-sm-6 col-xs-6">
                    <div class="row">
                        <div class="right-triangle">
                            <img src="<?php echo get_template_directory_uri(); ?>/images/right-triangle.png" alt="">
                        </div>
                    </div>
                </div>
                <div class="rhomb absolute">
                    ОСТАВЬТЕ ЗАЯВКУ!
                </div>
            </div>
        </div>
    </section>
    <section class="white-bg feedback">
        <div class="container">
            <div class="row">
                <div class="col-md-2 col-sm-2"></div>
                <div class="col-md-8 col-sm-8">
                    <div class="row">
                        <?php
                            $group = get_field('contact_info');
                            $mail = $group['e_mail'];
                            $number = $group['number_photo'];
                        ?>
                        <div class="email_geo"><? echo $mail; ?></div>
                        <div class="number"><? echo $number; ?></div>
                    </div>
                </div>
                <div class="col-md-2 col-sm-2"></div>
            </div>
            <div class="row">
                <div class="col-md-2 col-sm-1 hidden-xs"></div>
                <div class="col-md-8 col-sm-10 col-xs-12 relative">
                    <form class="contact_form" action="send.php" method="post">
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input class="center-pos" id="name"  type="text"  name="name"  placeholder="Имя"/>
                        </div>
                        <div class="col-md-6 col-sm-6 col-xs-12">
                            <input class="center-pos" id="email" type="email" name="email"  placeholder="Email"/>
                        </div>
                        <div class="submit">
                            <button id="sub" type="submit">ОТПРАВИТЬ</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-2 col-sm-1 hidden-xs"></div>
            </div>
        </div>
    </section>
    <section class="map-picture"></section>

<?php get_footer(); ?>
