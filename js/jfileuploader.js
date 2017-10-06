/**
 * Created by agungbayu
 */

(function($) {

    $.fn.jFileUploader = function(options)
    {
        var setting = {
            multi: false,
            runtimes : 'html5,flash,html4',
            multipart : true,
            name: 'file',
            max_file: 0,
            swf : null,
            extension: 'jpg,jpeg,gif,png',
            handler: '',
            upload_url: '',
            browse_button: 'btn-upload',
            maxsize: "10mb",
            maxcount: 8,
            maxwidth: 0,
            maxheight: 0
        };

        if (options) {
            options = $.extend(setting, options);
        } else {
            options = $.extend(setting);
        }

        return $(this).each(function(){

            var element = this;
            var action = options.multi ? "upload_multi_file" : "upload_single_file" ;
            var preview = $(element).find('.upload_preview_container ul');
            var uploading = null;
            var uploader = null;

            var upload_begin = function(files){
                $.each(files, function(file){
                    var progress = "<li class='uploading'><div class='uploading-progress'></div></li>";
                    $(preview).prepend(progress);
                });
                uploader.start();
            };

            uploader = new plupload.Uploader({
                container: $(element).get(0),
                browse_button : options.browse_button,
                flash_swf_url : options.swf,
                file_data_name: options.name,
                url: options.upload_url + "&filename=" + options.name + "&action=" + action,
                filters:  {
                    mime_types : [
                        { title : "extensions", extensions : options.extension }
                    ],
                    max_file_size : options.maxsize
                } ,
                init: {
                    FilesAdded: function(up, files) {
                        var current = $(preview).find('li').size();
                        var totalfile = files.length + current;
                        if(options.multi) {
                            if(totalfile > options.maxcount) {
                                alert(joption.limitFile + options.maxcount);
                            } else {
                                upload_begin(files);
                            }
                        } else {
                            upload_begin(files);
                        }
                    },
                    UploadProgress: function(up, file) {
                        $(uploading).find('.uploading-progress').css({
                            'width' : file.percent + "%"
                        });
                    },
                    Error: function(up, err) {
                        alert("Error : " + err.message);
                        $(uploading).remove();
                    },
                    UploadFile: function(up, file){
                        uploading = $(preview).find('.uploading').last();
                    },
                    FileUploaded: function(up, file, response) {
                        $(preview).sortable('destroy');
                        if(options.multi) {
                            $(uploading).replaceWith(response.response);
                        } else {
                            $(preview).html(response.response);
                        }
                        $(preview).sortable();
                    }
                }
            });

            uploader.init();


            // plupload.addFileFilter('max_dimension', function(dim, file, cb){
            //     var self = this, img = new o.Image();

            //     function finalize(result) {
            //         img.destroy();
            //         img = null;

            //         console.log(result);

            //         if (!result) {
            //             self.trigger('Error', {
            //                 code : plupload.IMAGE_DIMENSIONS_ERROR,
            //                 message : "Image size should be no more than " + dim[0]  + " x " + dim[1] + " pixels",
            //                 file : file
            //             });
            //         }
            //         cb(result);
            //     }
            //     img.onload = function() {
            //         if(dim[0] == 0 && dim[1] == 0) {
            //             finalize(true);
            //         } else if(img.width > dim[0] || img.height > dim[1]) {
            //             finalize(false);
            //         } else {
            //             finalize(true);
            //         }
            //     };
            //     img.onerror = function() {
            //         finalize(false);
            //     };
            //     img.load(file.getSource());
            // });


            $(this).find(".upload_preview_container").on('click', '.remove', function(){
                var parent = $(this).parent();
                $(parent).fadeOut(function(){
                    $(this).remove();
                });
            });

            $(element).find('.upload_preview_container ul').sortable();
        });

    };

})(jQuery);

(function ($, window, document, undefined) {
    var pluginName = 'pinterest_grid',
        defaults = {
            padding_x: 10,
            padding_y: 10,
            no_columns: 3,
            margin_bottom: 50,
            single_column_breakpoint: 700
        },
        columns,
        $article,
        article_width;

    function Plugin(element, options) {
        this.element = element;
        this.options = $.extend({}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype.init = function () {
        var self = this,
            resize_finish;

        $(window).resize(function() {
            clearTimeout(resize_finish);
            resize_finish = setTimeout( function () {
                self.make_layout_change(self);
            }, 11);
        });

        self.make_layout_change(self);

        setTimeout(function() {
            $(window).resize();
        }, 500);
    };

    Plugin.prototype.calculate = function (single_column_mode) {
        var self = this,
            tallest = 0,
            row = 0,
            $container = $(this.element),
            container_width = $container.width();
            $article = $(this.element).children();

        if(single_column_mode === true) {
            article_width = $container.width() - self.options.padding_x;
        } else {
            article_width = ($container.width() - self.options.padding_x * self.options.no_columns) / self.options.no_columns;
        }

        $article.each(function() {
            $(this).css('width', article_width);
        });

        columns = self.options.no_columns;

        $article.each(function(index) {
            var current_column,
                left_out = 0,
                top = 0,
                $this = $(this),
                prevAll = $this.prevAll(),
                tallest = 0;

            if(single_column_mode === false) {
                current_column = (index % columns);
            } else {
                current_column = 0;
            }

            for(var t = 0; t < columns; t++) {
                $this.removeClass('c'+t);
            }

            if(index % columns === 0) {
                row++;
            }

            $this.addClass('c' + current_column);
            $this.addClass('r' + row);

            prevAll.each(function(index) {
                if($(this).hasClass('c' + current_column)) {
                    top += $(this).outerHeight() + self.options.padding_y;
                }
            });

            if(single_column_mode === true) {
                left_out = 0;
            } else {
                left_out = (index % columns) * (article_width + self.options.padding_x);
            }

            $this.css({
                'left': left_out,
                'top' : top
            });
        });

        this.tallest($container);
        $(window).resize();
    };

    Plugin.prototype.tallest = function (_container) {
        var column_heights = [],
            largest = 0;

        for(var z = 0; z < columns; z++) {
            var temp_height = 0;
            _container.find('.c'+z).each(function() {
                temp_height += $(this).outerHeight();
            });
            column_heights[z] = temp_height;
        }

        largest = Math.max.apply(Math, column_heights);
        _container.css('height', largest + (this.options.padding_y + this.options.margin_bottom));
    };

    Plugin.prototype.make_layout_change = function (_self) {
        if($(window).width() < _self.options.single_column_breakpoint) {
            _self.calculate(true);
        } else {
            _self.calculate(false);
        }
    };

    $.fn[pluginName] = function (options) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin(this, options));
            }
        });
    }

})(jQuery, window, document);