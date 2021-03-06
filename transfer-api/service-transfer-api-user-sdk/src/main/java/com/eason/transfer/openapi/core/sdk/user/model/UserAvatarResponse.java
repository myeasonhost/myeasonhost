package com.eason.transfer.openapi.core.sdk.user.model;

import com.eason.transfer.openapi.core.common.response.Response;
import com.thoughtworks.xstream.annotations.XStreamAlias;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@XStreamAlias("UserAvatarResponse")
public class UserAvatarResponse extends Response {
    private String imgUrl;	//头像地址
    private String result;	//返回信息
}
