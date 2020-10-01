export const simple = `
class CollapsableCard extends React.Component {
  state = { activeTabId: '1' };
  render() {
    return (
      <CardFolderTabs
        activeId={this.state.activeTabId}
        onTabChange={activeTabId => this.setState({ activeTabId })}
      >
        <CardFolderTabs.Tab id="1" name="Nice tab">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is a nice tab"
                subtitle="Create your own tabs and try them!"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="2" name="Another nice tab">
          <Card>
            <Card.Content>
              <EmptyState
                title="This is also a nice tab"
                subtitle="It has a very long title that will eventually be truncated by ellipsis"
                theme="section"
              >
                <TextButton prefixIcon={<Icons.Add />}>
                  Pointless button
                </TextButton>
              </EmptyState>
            </Card.Content>
          </Card>
        </CardFolderTabs.Tab>
        <CardFolderTabs.Tab id="3" name="Disabled tab" disabled>
          <div>This tab has no real content, it's disabled anyway</div>
        </CardFolderTabs.Tab>
      </CardFolderTabs>
    );
  }
}
`;
