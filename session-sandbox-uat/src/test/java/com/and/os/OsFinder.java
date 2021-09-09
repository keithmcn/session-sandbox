package com.and.os;

import io.github.bonigarcia.wdm.OperatingSystem;

/*
 * Supplies current 'OperatingSystem' for Selenium tests.
 */
public final class OsFinder {

    public static OperatingSystem OPERATING_SYSTEM = getOperatingSystem();

    private static OperatingSystem getOperatingSystem() {
        String OS_NAME = System.getProperty("os.name").toLowerCase();
        if (OS_NAME.contains("win")) {
            return OperatingSystem.WIN;
        }
        if (OS_NAME.contains("mac")) {
            return OperatingSystem.MAC;
        }
        return OperatingSystem.LINUX;
    }

}
