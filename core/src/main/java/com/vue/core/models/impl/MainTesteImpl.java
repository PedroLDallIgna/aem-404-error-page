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

package com.vue.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.vue.core.models.MainTeste;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    MainTeste.class,
    ComponentExporter.class
}, resourceType = "vue/components/main-teste")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class MainTesteImpl
    implements MainTeste
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean showImg;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imgSource;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String imgDescription;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean showTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleContent;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String titleType;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long titleSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Boolean showText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String textContent;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long textSize;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonContent;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String buttonType;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long buttonFontSize;
    @SlingObject
    private Resource resource;

    @Override
    public Boolean getShowImg() {
        return showImg;
    }

    @Override
    public String getImgSource() {
        return imgSource;
    }

    @Override
    public String getImgDescription() {
        return imgDescription;
    }

    @Override
    public Boolean getShowTitle() {
        return showTitle;
    }

    @Override
    public String getTitleContent() {
        return titleContent;
    }

    @Override
    @JsonProperty("titleType")
    public String getTitleType() {
        return titleType;
    }

    @Override
    public Long getTitleSize() {
        return titleSize;
    }

    @Override
    public Boolean getShowText() {
        return showText;
    }

    @Override
    public String getTextContent() {
        return textContent;
    }

    @Override
    public Long getTextSize() {
        return textSize;
    }

    @Override
    public String getButtonContent() {
        return buttonContent;
    }

    @Override
    @JsonProperty("buttonType")
    public String getButtonType() {
        return buttonType;
    }

    @Override
    public Long getButtonFontSize() {
        return buttonFontSize;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
