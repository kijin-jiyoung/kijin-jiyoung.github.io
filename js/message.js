	var process_url = './guestbook/process';
	$(document).ready(function()
	{
		guestbook_read();

		$('#guestbook-write').click(function(){
			if (!$('#guest-name').val().notNull()){
				alert('이름을 입력해주세요');
				$('#guest-name').focus();
				return;
			}

			/*if (!$('#guest-pwd').val().notNull()){
				alert('비밀번호를 입력해주세요');
				$('#guest-pwd').focus();
				return;
			}

			if ($('#guest-pwd').val().length < 4)
			{
				alert('비밀번호는 최소 4자 이상이어야 합니다');
				$('#guest-pwd').focus();
				return;
			}*/

			if (!$('#guest-content').val().notNull()){
				alert('내용을 입력해주세요');
				$('#guest-content').focus();
				return;
			}

			$.ajax({
				url: process_url,
				method:'post',
				data : {
					guest_name:$('#guest-name').val(),
					/*guest_pwd:$('#guest-pwd').val(),*/
					content:$('#guest-content').val(),
					user_id:$('#user_id').val(),
					process:"write"
				},
				cache: false,
				dataType: 'json',
				timeout: 10000,
				beforeSend : function() {},
				error: function(xhr, ajaxOptions, thrownError){
					alert('error');
					return;
				},
				success: function(json){
					var html = '';
					if (json.status == "success"){
						$('#guest-name, #guest-pwd, #guest-content').val('');
						guestbook_read();
					}else if(json.status == "error"){
						json_msg(json.msg);
					}
				}
			});
		});
	});

	var guestbook_del = function(proc,uid){
		// T: 관리자 삭제 F: 게스트 삭제
		if (proc == "T")
		{
			ui_alert('글을 삭제 하시겠습니까?');
			 $( "#dialog-msg" ).dialog({
				resizable: false,
				height:140,
				modal: true,
				buttons: {
					"삭제": function() {
						$.ajax({
							url: process_url,
							method:'post',
							data : {
								user_id:$('#user_id').val(),
								process:"delete",
								uid : uid
							},
							cache: false,
							dataType: 'json',
							timeout: 10000,
							beforeSend : function() {},
							error: function(xhr, ajaxOptions, thrownError){
								alert('error');
								return;
							},
							success: function(json){
								if (json.status == "success"){
									guestbook_read();
								}else if(json.status == "error"){
									json_msg(json.msg);
								}
							}
						});

						$( this ).dialog( "close" );
					},
					"취소": function() {
						$( this ).dialog( "close" );
					}
				}
			});
		}
		else if (proc == "F")
		{
			ui_alert('글을 삭제 하시겠습니까?<div class="delform"><div class="delmsg">로그인 비밀번호를 입력하세주세요.</div><input type="password" class="form-control" id="guest-inp-pwd"></div>');
			 $( "#dialog-msg" ).dialog({
				resizable: false,
				height:200,
				modal: true,
				buttons: {
					"삭제": function() {

						/*if (!$('#guest-inp-pwd').val().notNull()){
							alert('비밀번호를 입력해주세요');
							$('#guest-inp-pwd').focus();
							return;
						}*/

						$.ajax({
							url: process_url,
							method:'post',
							data : {
								user_id:$('#user_id').val(),
								process:"g_delete",
								pass:$('#guest-inp-pwd').val(),
								uid : uid
							},
							cache: false,
							dataType: 'json',
							timeout: 10000,
							beforeSend : function() {},
							error: function(xhr, ajaxOptions, thrownError){
								alert('error');
								return;
							},
							success: function(json){
								if (json.status == "success"){
									guestbook_read();
								}else if(json.status == "error"){
									json_msg(json.msg);
								}
							}
						});

						$( this ).dialog( "close" );
					},
					"취소": function() {
						$( this ).dialog( "close" );
					}
				}
			});
		}


	};

	var guestbook_read = function(){
		$.ajax({
			url: process_url,
			method:'post',
			data : {
				user_id:$('#user_id').val(),
				process:"read"
			},
			cache: false,
			dataType: 'json',
			timeout: 10000,
			beforeSend : function() {},
			error: function(xhr, ajaxOptions, thrownError){
				alert('error');
				return;
			},
			success: function(json){
				var html = '';
				var dhtml = '';
				if (json.status == "success"){
					$.each(json.result, function(key) {

						if (json.result[key]['login_id'] == json.result[key]['user_id']){
							dhtml = '<a href="#none" onclick="javascript:guestbook_del(\'T\', \''+json.result[key]['uid']+'\');">삭제</a>';
						}else{
							dhtml = '<a href="#none" onclick="javascript:guestbook_del(\'F\', \''+json.result[key]['uid']+'\');">삭제</a>';
						}

						html += '<li>\n'
							+ '	<p class="name">'+json.result[key]['guest_name']+'</p>\n'
							+ '	<p class="date">'+json.result[key]['reg_date']+'</p>\n'
							+ '	<p class="memo">'+json.result[key]['content']+'</p>\n'
							+ '	<p class="del">'+dhtml+'</p>\n'
							+ '</li>\n';
					});

					$('#guest-list').empty().append(html).promise().done(function(){
						$('#guestbook-wrap').show();
					});

				}else if(json.status == "error"){
					json_msg(json.msg);
				}
			}
		});
	};
