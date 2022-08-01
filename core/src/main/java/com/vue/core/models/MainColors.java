/*

 * ***********************************************************************

 * SPA Vue Project CONFIDENTIAL

 * ___________________

 *

 * Copyright 2022 SPA Vue Project.

 * All Rights Reserved.

 *

 * NOTICE:  All information contained herein is, and remains the property

 * of SPA Vue Project and its suppliers, if any. The intellectual and

 * technical concepts contained herein are proprietary to SPA Vue Project

 * and its suppliers and are protected by trade secret or copyright law.

 * Dissemination of this information or reproduction of this material

 * is strictly forbidden unless prior written permission is obtained

 * from SPA Vue Project.

 * ***********************************************************************

 */


package com.vue.core.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;
import org.osgi.annotation.versioning.ConsumerType;


/**
 * Defines the {@code MainColors} Sling Model used for the {@code vue/components/main-colors} component.
 * 
 */
@ConsumerType
public interface MainColors
    extends ComponentExporter
{


    Boolean getShowImg();

    String getImgSource();

    String getImgDescription();

    Boolean getShowTitle();

    String getTitleContent();

    @JsonProperty("titleType")
    String getTitleType();

    Long getTitleSize();

    String getTitleColor();

    Boolean getShowText();

    String getTextContent();

    Long getTextSize();

    String getTextColor();

    String getButtonContent();

    @JsonProperty("buttonType")
    String getButtonType();

    Long getButtonFontSize();

}
