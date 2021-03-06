package com.eason.transfer.openapi.core.sdk.index.swiper.model;

import com.thoughtworks.xstream.annotations.XStreamAlias;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@XStreamAlias("ImgVo")
public class ImgVo implements Serializable {
    private Long id;
    private String title;
    private String imgSrc;
    private String imgLink;
}
