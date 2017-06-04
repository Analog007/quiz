<div class="module-quiz-type-list" data-question="<?php echo $item["id"]; ?>">
    <h3><?php echo $item["title"]?></h3>
    <div class="row" >
        <?php foreach ($item["elements"] as $element) { ?>
            <div class="col-xs-12">
                <div class="question-item"  data-id="<?php echo $element["category_id"]; ?>">
                    <i class="fa fa-square-o"></i>
                    <span class="subtitle"><?php echo $element["subtitle"]; ?></span>
                </div>
            </div>
        <?php } ?>
    </div>
</div>