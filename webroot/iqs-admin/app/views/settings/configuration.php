<?php
$Config = new Config;
?>


 <div class="configuration-content">

        <div class="header-wrapper">
            <div class="multi-cols">
                <div class="col-1">
                    <h1>Configuration</h1>
                </div>
                <div class="col-2">

                </div>
            </div>
        </div>
     <section>
     <div class="table-actions">
         <div class="multi-cols">
             <div class="col-1">
                 <a class="button light-blue" data-add-row="true" data-table-name="config">Add</a>
             </div>
             <div class="col-2">
                 <div class="loading-wrapper csv-loader">
                     <div class="loader"></div>
                     <div class="loading-text">Importing...</div>
                 </div>
                 <a href="#" class="button green import-csv-configuration">Import</a>
                 <a href="csv.php?template=configuration" target="_blank" class="button gray export-configuration">Export</a>
             </div>
         </div>
     </div>
     </section>
    <section>
        <h2>IQS</h2>
        <form name="env-configuration">
            <input type="hidden" name="conf_section" value="env"/>
            <?php
            foreach ($page_data->data->conf->env as $key => $value):
            ?>
                <div class="row multi-cols">
                    <div class="col-1">
<!--                        <label>IQS Debug Mode:</label>-->
                        <label><?php echo $value->key ?></label>
                    </div>
                    <div class="col-2">
                        <?php if ($value->value == "true" || $value->value == "false") { ?>
                            <select name="<?php echo $value->key;?>">
                                <?php
                                $db_logging_options = array(
                                    array(
                                        "label" => "Enabled",
                                        "value" => "true"
                                    ),
                                    array(
                                        "label" => "Disabled",
                                        "value" => "false"
                                    )
                                );

                                foreach($db_logging_options as $option) {
                                    ?>
                                    <option value="<?php echo $option["value"]?>" <?php echo $option["value"] == $value->value ? "selected" : "";?>><?php echo $option["label"];?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <?php
                            } else { ?>
                                <input type="text" name="<?php echo $value->key;?>" value="<?php echo $value->value;?>">
                                <?php
                            }
                            ?><a class="button red delete" data-delete-row="true" data-conf-sec="env" data-conf-element="<?php echo $value->key?>">Delete</a>
                    </div>
                </div>
            <?php
            endforeach;
            ?>
            <input type="submit" class="button green submit" value="Save Changes"/>
        </form>
    </section>

    <section>
        <h2>Logging</h2>
        <form name="logging-configuration">
        	<input type="hidden" name="conf_section" value="logging"/>
            <?php
            foreach ($page_data->data->conf->logging as $key => $value):
            ?>
                <div class="row multi-cols">
                    <div class="col-1">
                        <label><?php echo $value->key; ?></label>
                    </div>
                    <div class="col-2">
                        <?php if ($value->value == "true" || $value->value == "false") { ?>
                        <select name="<?php echo $value->key;?>">
                            <?php
                                $db_logging_options = array(
                                    array(
                                        "label" => "Enabled",
                                        "value" => "true"
                                    ),
                                    array(
                                        "label" => "Disabled",
                                        "value" => "false"
                                    )
                                );

                                foreach($db_logging_options as $option) {
                                    ?>
                                    <option value="<?php echo $option["value"]?>" <?php echo $option["value"] == $value->value ? "selected" : "";?>><?php echo $option["label"];?></option>
                                    <?php
                                }
                            ?>
                        </select>
                        <?php
                        } else { ?>
                            <input type="text" name="<?php echo $value->key;?>" value="<?php echo $value->value;?>">
                         <?php
                        }
                        ?>
                        <a class="button red delete" data-delete-row="true" data-conf-sec="logging" data-conf-element="<?php echo $value->key?>">Delete</a>
                    </div>
                </div>
                <?php
            endforeach;
            ?>

            <input type="submit" class="button green submit" value="Save Changes"/>
        </form>
    </section>
    
    <section>
    	<h2>EZQuote API</h2>
        <form name="ezquoteapi-configuration">
        	<input type="hidden" name="conf_section" value="ezquoteapi"/>
            <?php
            foreach ($page_data->data->conf->ezquoteapi as $key => $value):
                ?>
                <div class="row multi-cols">
                    <div class="col-1">
                        <label><?php echo $value->key; ?></label>
                    </div>
                    <div class="col-2">
                        <?php if ($value->value == "true" || $value->value == "false") { ?>
                            <select name="<?php echo $value->key;?>">
                                <?php
                                $db_logging_options = array(
                                    array(
                                        "label" => "Enabled",
                                        "value" => "true"
                                    ),
                                    array(
                                        "label" => "Disabled",
                                        "value" => "false"
                                    )
                                );

                                foreach($db_logging_options as $option) {
                                    ?>
                                    <option value="<?php echo $option["value"]?>" <?php echo $option["value"] == $value->value ? "selected" : "";?>><?php echo $option["label"];?></option>
                                    <?php
                                }
                                ?>
                            </select>
                            <?php
                        } else { ?>
                            <input type="text" name="<?php echo $value->key;?>" value="<?php echo $value->value;?>">
                            <?php
                        }
                        ?>
                        <a class="button red delete" data-delete-row="true" data-conf-sec="ezquoteapi" data-conf-element="<?php echo $value->key?>">Delete</a>
                    </div>
                </div>
                <?php
            endforeach;
            ?>

            <input type="submit" class="button green" value="Save Changes"/>
        </form>
    </section>
    
    <section>
    	<h2>States</h2>
    	<form name="states-configuration">
        	<input type="hidden" name="conf_section" value="statesenabled"/>
            <?php
                foreach ($page_data->data->conf->statesenabled as $key => $value):
             ?>
                <div class="row multi-cols">
                    <div class="col-1">
                        <label><?php echo $Config->state_from_abbrev($value->key);?>:</label>
                    </div>
                    <div class="col-2">
                        <select name="<?php echo $value->key;?>">
                            <?php
                            $states_options = array(
                                array(
                                    "label" => "Enabled",
                                    "value" => "true"
                                ),
                                array(
                                    "label" => "Disabled",
                                    "value" => "false"
                                )
                            );

                            foreach($states_options as $option) {
                                ?>
                                <option value="<?php echo $option["value"]?>" <?php echo $option["value"] == $value->value ? "selected" : "";?>><?php echo $option["label"];?></option>
                                <?php
                            }
                            ?>

                        </select>
                        <a class="button red delete" data-delete-row="true" data-conf-sec="statesenabled" data-conf-element="<?php echo $value->key?>">Delete</a>
                    </div>
                </div>
                <?php
            endforeach;
            ?>
            <input type="submit" class="button green submit" value="Save Changes"/>
        </form>
    
    </section>
    
    <section>
    	<h2>Products</h2>
    	<form name="states-configuration">
        	<input type="hidden" name="conf_section" value="productsenabled"/>

            <?php
            foreach ($page_data->data->conf->productsenabled as $key => $value):
                ?>
                <div class="row multi-cols">
                    <div class="col-1">
                        <label>
                            <?php
                            $state_abbr = substr($value->key, 0,2);
                            $product_abbr = substr($value->key, 2, 10);
                            echo $Config->state_from_abbrev($state_abbr)." ".strtoupper($product_abbr);?>:</label>
                    </div>
                    <div class="col-2">
                        <select name="<?php echo $value->key;?>">
                            <?php
                            $states_options = array(
                                array(
                                    "label" => "Enabled",
                                    "value" => "true"
                                ),
                                array(
                                    "label" => "Disabled",
                                    "value" => "false"
                                )
                            );

                            foreach($states_options as $option) {
                                ?>
                                <option value="<?php echo $option["value"]?>" <?php echo $option["value"] == $value->value ? "selected" : "";?>><?php echo $option["label"];?></option>
                                <?php
                            }
                            ?>
                        </select>
                        <a class="button red delete" data-delete-row="true" data-conf-sec="productsenabled" data-conf-element="<?php echo $value->key?>">Delete</a>
                    </div>
                </div>
                <?php
            endforeach;
            ?>
            <input type="submit" class="button green submit" value="Save Changes"/>
        </form>
    
    </section>
    
    <section>
    	<h2>Zipcode Whitelisting</h2>
        <form name="states-configuration">
        	<input type="hidden" name="conf_section" value="whitelistenabled"/>

            <?php
            foreach ($page_data->data->conf->whitelistenabled as $key => $value):
                ?>
                <div class="row multi-cols">
                    <div class="col-1">
                        <label>
                            <?php
                            $state_abbr = substr($value->key, 0,2);
                            $product_abbr = substr($value->key, 2, 10);
                            echo $Config->state_from_abbrev($state_abbr)." ".strtoupper($product_abbr);?>:</label>
                    </div>
                    <div class="col-2">
                        <select name="<?php echo $value->key;?>">
                            <?php
                            $states_options = array(
                                array(
                                    "label" => "Enabled",
                                    "value" => "true"
                                ),
                                array(
                                    "label" => "Disabled",
                                    "value" => "false"
                                )
                            );

                            foreach($states_options as $option) {
                                ?>
                                <option value="<?php echo $option["value"]?>" <?php echo $option["value"] == $value->value ? "selected" : "";?>><?php echo $option["label"];?></option>
                                <?php
                            }
                            ?>
                        </select>
                        <a class="button red delete" data-delete-row="true" data-conf-sec="whitelistenabled" data-conf-element="<?php echo $value->key?>">Delete</a>
                    </div>
                </div>
                <?php
            endforeach;
            ?>
            <input type="submit" class="button green submit" value="Save Changes"/>
        </form>
    
    </section>

</div>

<form style="display: none;" action="" method="post" enctype="multipart/form-data" name="configuration_csv" id="form1">
  Choose your file: <br />
  <input name="csv" type="file" id="csv" />
  <input type="submit" name="Submit" value="Submit" />
</form> 