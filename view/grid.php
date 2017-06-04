<div class="module-quiz-type-grid question" data-question="<?php echo $item["id"]; ?>" data-select-multiple="<?php echo $item["multiple"]; ?>">
    <h3><?php echo $item["title"]?></h3>
    <?php
    $i=0;
    $wrap_items = 3;
    foreach ($item["elements"] as $element)
    {
        $i+=1;
        if($i%$wrap_items==1) {
            echo '<div class="row">';
        } ?>
        <div class="col-xs-4">
            <div class="question-item"  data-id="<?php echo $element["category_id"]; ?>">
                <img class="img-responsive" src="<?php echo $element["pic_location"]; ?>">
                <div class="small"><?php echo $element["description"]; ?></div>
                <div class="">
                    <i class="fa fa-square-o"></i>
                    <span class="subtitle"><?php echo $element["subtitle"]; ?></span>
                </div>
            </div>
        </div>
        <?php if($i%$wrap_items==0) {
            echo '</div>';
        }
    }

    if($i%$wrap_items!=0) {
        echo '</div>';
    } ?>
</div>