/*
 *  Copyright (c) 2020, 2021 Microsoft Corporation
 *
 *  This program and the accompanying materials are made available under the
 *  terms of the Apache License, Version 2.0 which is available at
 *  https://www.apache.org/licenses/LICENSE-2.0
 *
 *  SPDX-License-Identifier: Apache-2.0
 *
 *  Contributors:
 *       Microsoft Corporation - initial API and implementation
 *
 */

plugins {
    `java-library`
    `java-test-fixtures`
}


dependencies {
    api(project(":spi:common:core-spi"))
    api(project(":spi:common:participant-spi"))
    api(project(":spi:common:policy-engine-spi"))
    api(project(":spi:control-plane:policy-spi"))

    testImplementation(project(":tests:junit-base"))
    testImplementation(project(":core:common:lib:json-lib"))

    testFixturesImplementation(project(":spi:control-plane:asset-spi"))
    testFixturesImplementation(project(":core:common:junit"))
}


