package com.eason.transfer.openapi.core.sdk.index.swiper.model;

import com.eason.transfer.openapi.core.common.response.Response;
import com.thoughtworks.xstream.annotations.XStreamAlias;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@XStreamAlias("ImgResponse")
public class ImgResponse extends Response {

    private static final long serialVersionUID = 1L;

    private List<ImgVo> list;

}
