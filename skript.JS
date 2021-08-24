 $("#hlblock-table-form").submit(function (e)
    {
        e.preventDefault();
        // console.log(ajaxPath)

        var formData = $("#hlblock-table-form").serializeArray();
        if ($("#findProp").val() == "findart") art_id = $("#findart").val();

        $.blockUI({
            message: "<p>Пожалуйста подождите...</p>",
            css: { backgroundColor: "#f00", color: "#fff" },
            overlayCSS: { backgroundColor: "#000", opacity: 0.1, cursor: "wait" }
        });
        $("#intable").load(ajaxPath + "/table.php", { data: formData }, function ()
        {
            $(".editblock").hide();
            arrPreLoad = {};
            // Lazy.revalidate();
            $(".bx-pagination").show();
            $.unblockUI();
            forTable();
            $("input.edit:checkbox").setCheckboxesShift();
            $("input.product_hidden:checkbox").setCheckboxesShift();
            newItem = false;
        });
    });
