<script language="javascript">
    var test="this &nbsp; is &nbsp; a test";
    alert('REPLACE BEFIRE : ' + test);
    test=test.replace(/\s+|&nbsp;/ig, '');
    alert('REPLACE AFTER : ' + test);
</script>
