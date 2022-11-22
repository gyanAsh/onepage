import { Switch, useTheme } from 'reshaped'
const DarkMode = () => {
    const { invertColorMode } = useTheme()
    return <Switch name="toggleDarkMode" onChange={invertColorMode} />
}

export default DarkMode;